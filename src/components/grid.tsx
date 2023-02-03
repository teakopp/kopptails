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
    // a bit time consuming
    if (this.props.pageStatus === "By Category") {
      let filter = this.props.filterStatus 
      if (!this.props.filterStatus){
	filter = "Ordinary Drink"
      }
      const res = await getDrinksByCategory(filter);
      const data = [];
      for (let i = 0; i < res.drinks.length; i++) {
        data.push({
          id: res.drinks[i].idDrink,
          src: res.drinks[i].strDrinkThumb,
          title: res.drinks[i].strDrink,
        });
      }
      await this.setState({gridData:data})
    }

    if (this.props.pageStatus === "By Ingredient") {
      let filter = this.props.filterStatus 
      if (!this.props.filterStatus){
	filter = "Light rum"
      }
      const res = await getDrinksByIngredient(filter);
      const data = [];
      for (let i = 0; i < res.drinks.length; i++) {
        data.push({
          id: res.drinks[i].idDrink,
          src: res.drinks[i].strDrinkThumb,
          title: res.drinks[i].strDrink,
        });
      await this.setState({gridData:data})
      }
    }

    if (this.props.pageStatus === "By Serving Glass") {
      let filter = this.props.filterStatus || "Highball glass" 
      if (!filter){
	filter = "Highball glass"
      }
      const res = await getDrinksByServingGlass (filter);
      const data = [];
      for (let i = 0; i < res.drinks.length; i++) {
        data.push({
          id: res.drinks[i].idDrink,
          src: res.drinks[i].strDrinkThumb,
          title: res.drinks[i].strDrink,
        });
      await this.setState({gridData:data})
      }
    }
  }

  async componentDidMount() {
    await this.updateData();
  }
componentDidUpdate(prevProps: GridProps) {
    if (prevProps.pageStatus !== this.props.pageStatus){
      this.updateData();
    }

    if(prevProps.filterStatus!== this.props.filterStatus) {
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
