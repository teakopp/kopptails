import React from "react";
import "./grid.css";
import Item from "./item";
import { ItemProps } from "./item";
import { getRandomDrink, getDrinksByIngredient, getDrinksByServingGlass } from "../services/drinks";

interface DrinkData{
  idDrink:string;
  strDrinkThumb:string;
  strDrink:string;
  strInstructions:string;
}

interface GridData{
  id:string;
  src:string;
  title:string;
  description:string;
}


interface GridProps {
  pageStatus: string;
}

interface GridState {
  gridData: ItemProps[];
}


class Grid extends React.Component<GridProps, GridState> {
  constructor(props: GridProps) {
    super(props);
    this.state = {
      gridData: [
        { id: "0", src: "", title: "Test", description: "Test description" },
      ],
    };
  }

  // Made res any type because it didn't seem worth it to create an interface for axios call data
  extractData = (drinks:DrinkData[]) => {
      const data: GridData[] = [{"id":"","src":"","title":"","description":""}] 
      for (let i = 0; i < drinks.length; i++) {
        data.push({
          id: drinks[i].idDrink,
          src: drinks[i].strDrinkThumb,
          title: drinks[i].strDrink,
          description: drinks[i].strInstructions,
        });
      }
      return data
  }

  getRandomDrinks = async () => {
    let data: GridData[] = [{"id":"","src":"","title":"","description":""}] 
    // Picked number 6 because it seemed like that would be enough to fill page
    for (let i = 0; i < 6; i++) {
      const res = await getRandomDrink();
      data = this.extractData(res.drinks)
      }
    this.setState({ gridData: data });
  };


  updateData = async () => {
    if (this.props.pageStatus === "Suprise Me") {
      this.getRandomDrinks();
    }
    if (this.props.pageStatus === "By Category") {
      const data = [
        { id: "0", src: "", title: "Tes", description: "Test description" },
      ];
      this.setState({ gridData: data });
    }
    if (this.props.pageStatus === "By Ingredient") {
      const data = [
        { id: "0", src: "", title: "Test", description: "Test description" },
      ];
      this.setState({ gridData: data });
    }
    if (this.props.pageStatus === "By Serving Glass") {
      const data = [
        { id: "0", src: "", title: "Test", description: "Test description" },
      ];
      this.setState({ gridData: data });
    }
  };

  async componentDidMount() {
    await this.updateData();
  }

  componentDidUpdate(prevProps: GridProps) {
    if (prevProps.pageStatus !== this.props.pageStatus) {
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
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
