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
        { id: "0", src: "", title: "Test"},
      ],
    };
  }

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

  updateData = async () => {
    if (this.props.pageStatus === "Suprise Me") {
      this.getRandomDrinks();
    }

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

  async componentDidMount() {
    await this.updateData();
  }
componentDidUpdate(prevProps: GridProps) {
    if (prevProps.pageStatus !== this.props.pageStatus) {
      this.updateData();
    }
    if (prevProps.filterStatus!== this.props.filterStatus) {
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
