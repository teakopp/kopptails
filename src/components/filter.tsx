import React from "react";
import "./filter.css";
import { getIngredients } from "../services/ingredients";

interface FilterState {
  ingredients: string[];
}

interface FilterProps {
  pageStatus: string;
}

class Filter extends React.Component<FilterProps, FilterState> {
  async componentDidMount() {
    const res = await getIngredients();
    const data = [];
    for (let i = 0; i < res.drinks.length; i++) {
      data.push(res.drinks[i].strIngredient1);
    }
    this.setState({ ingredients: data });
  }

  render() {
    let dropdown;
    if (this.props.pageStatus === "Discover") {
      const options = this.state.ingredients.map((item, index) => (
        <option>{item}</option>
      ));
      dropdown = (
        <div>
          <select>{options}</select>
	  
        </div>
      );
    } else {
      dropdown = <div></div>;
    }
    return( 
    <div className="filter-buttons">
    </div>)
  }
}

export default Filter;
