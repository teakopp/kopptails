import React from "react";
import "./filter.css";
import { getIngredients } from "../services/ingredients";
import { getCategories } from "../services/categories";
import { getGlasses } from "../services/glasses";

interface Glass {
  strGlass: string;
}

interface Category {
  strCategory: string;
}

interface Ingredient {
  strIngredient1: string;
}

interface Filters {
  categories: Category[];
  ingredients: Ingredient[];
  glasses: Glass[];
}

interface FilterState {
  data: Filters;
  lastPageStatus: string;
}

interface FilterProps {
  pageStatus: string;
  filterStatus: string;
  changeFilterStatus: any;
}

class Filter extends React.Component<FilterProps, FilterState> {
  constructor(props: FilterProps) {
    super(props);
    this.state = {
      lastPageStatus: "",
      data: {
        categories: [{ strCategory: "" }],
        ingredients: [{ strIngredient1: "" }],
        glasses: [{ strGlass: "" }],
      },
    };
  }
  // Grab all that sweet sweet filter data all at once so we
  // only to make one call one time
  updateData = async () => {
    const categories = await getCategories();
    const ingredients = await getIngredients();
    const glasses = await getGlasses();
    const filterData = {
      categories: categories.drinks,
      ingredients: ingredients.drinks,
      glasses: glasses.drinks,
    };
    this.setState({ data: filterData });
  };

  async componentDidMount() {
    this.updateData();
  }

  // Important the only way to get to get any of the options to reset dropdown position
  // Is to set a unique key so react has to re-render select. In this case I use pagestatue-pagestatus.
  categoryOptions = () => {
    const options = this.state.data.categories.map((item, index) => (
      <option key={index} className="filter-dropdown-option">
        {item.strCategory}
      </option>
    ));
   const dropdown = (
      <div>
        <select
          key={this.props.pageStatus + "-category"}
          defaultValue="Select"
          onChange={(e) => this.props.changeFilterStatus(e.target.value)}
          className="filter-dropdown-select"
        >
          <option className="filter-dropdown-option">Select</option>
          {options}
        </select>
      </div>
    );
    return dropdown;
  };

  ingredientOptions = () => {
    const options = this.state.data.ingredients.map((item, index) => (
      <option key={index} className="filter-dropdown-option">
        {item.strIngredient1}
      </option>
    ));
    const dropdown = (
      <div>
        <select
          key={this.props.pageStatus + "-ingredient"}
          defaultValue="Select"
          onChange={(e) => this.props.changeFilterStatus(e.target.value)}
          className="filter-dropdown-select"
        >
          <option className="filter-dropdown-option">Select</option>
          {options}
        </select>
      </div>
    );
    return dropdown;
  };

  glassOptions = () => {
    const options = this.state.data.glasses.map((item, index) => (
      <option key={index} className="filter-dropdown-option">
        {item.strGlass}
      </option>
    ));
    const dropdown = (
      <div>
        <select
          key={this.props.pageStatus + "-glass"}
          defaultValue="Select"
          onChange={(e) => this.props.changeFilterStatus(e.target.value)}
          className="filter-dropdown-select"
        >
          <option className="filter-dropdown-option">Select</option>
          {options}
        </select>
      </div>
    );
    return dropdown;
  };

  // This is just so everything looks nicer
  pickOptions = () => {
    if (this.props.pageStatus === "By Category") {
      return this.categoryOptions();
    }
    if (this.props.pageStatus === "By Ingredient") {
      return this.ingredientOptions();
    }
    if (this.props.pageStatus === "By Serving Glass") {
      return this.glassOptions();
    }
  };

  render() {
    const options = this.pickOptions();

    return <div className="filter-buttons">{options}</div>;
  }
}

export default Filter;
