import React from "react";
import "./grid.css";
import Item from "./item";
import { ItemProps } from "./item";
import { getRandomDrink, getDrinksByCategory,getDrinksByIngredient, getDrinksByServingGlass } from "../services/drinks";

interface GridProps {
  pageStatus: string;
  filterStatus: string;
}

interface GridState {
  gridData: ItemProps[];
}

class Grid extends React.Component<GridProps, GridState> {
  constructor(props: GridProps) {
    super(props);
    this.state = {
      gridData: [
        { id: "", src: "", title: ""},
      ],
    };
  }

  // Gets 6 random drinks then loads results into stateData to
  // render it
  getRandomDrinks = async () => {
    const data = [];
    // Picked number 6 because it seemed like that would be enough to fill page
    for (let i = 0; i < 6; i++) {
      const res = await getRandomDrink();
      for (let i = 0; i < res.drinks.length; i++) {
        data.push({
          id: res.drinks[i].idDrink,
          src: res.drinks[i].strDrinkThumb,
          title: res.drinks[i].strDrink,
        });
      }
    }
    this.setState({ gridData: data });
  };

  // A general function created to fetch data should any of the page statuses change
  // pageStatus wasn't the best choice for var names as it's not as desciptive as it should
  // be and could stand to be changed later
  updateData = async () => {
    if (this.props.pageStatus === "Suprise Me") {
      this.getRandomDrinks();
    }
    
    // These functions are all very similar. The only reason they aren't 
    // using the same function to unpack data is because typescript can make that
    // a bit time consuming when dealing with multiple data return types
    if (this.props.pageStatus === "By Category") {
      const filter = this.props.filterStatus || "Ordinary Drink"
      const res = await getDrinksByCategory(filter);
      const data = [];
      for (let i = 0; i < res.drinks.length; i++) {
        data.push({
          id: res.drinks[i].idDrink,
          src: res.drinks[i].strDrinkThumb,
          title: res.drinks[i].strDrink,
        });
      }
      this.setState({gridData:data})
    }

    if (this.props.pageStatus === "By Ingredient") {
      console.log(this.props.filterStatus)
      const res = await getDrinksByIngredient(this.props.filterStatus);
      const data = [];
      for (let i = 0; i < res.drinks.length; i++) {
        data.push({
          id: res.drinks[i].idDrink,
          src: res.drinks[i].strDrinkThumb,
          title: res.drinks[i].strDrink,
        });
      this.setState({gridData:data})
      }
    }

    if (this.props.pageStatus === "By Serving Glass") {
      const filter = this.props.filterStatus || "Highball glass" 
      const res = await getDrinksByServingGlass (filter );
      const data = [];
      for (let i = 0; i < res.drinks.length; i++) {
        data.push({
          id: res.drinks[i].idDrink,
          src: res.drinks[i].strDrinkThumb,
          title: res.drinks[i].strDrink,
        });
      this.setState({gridData:data})
      }
    }
  }
  

// This updates component when props have been updated
// Instead of just waiting for state update to render
// This is helpful because there are two states being passed in as
// props that are updated with an outside function
componentDidUpdate(prevProps: GridProps) {
    if (prevProps.pageStatus !== this.props.pageStatus || prevProps.filterStatus!== this.props.filterStatus) {
      this.updateData();
    }
  }
  

  render() {
    return (
      <div>
        <div className="grid-container">
          <div className="grid">
            {this.state.gridData.map((item) => (
              <Item
                id={item.id}
                title={item.title}
                src={item.src}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
