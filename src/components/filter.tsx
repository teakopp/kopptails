import React from "react";
import "./filter.css";
import { getIngredients } from "../services/ingredients";
import { getCategories} from "../services/categories";
import { getGlasses} from "../services/glasses";

interface Filters{
  strCategory?:string;
  strIngredient1?:string;
  strGlass?:string;
}

interface FilterState {
  filters: Filters[]
}

interface FilterProps {
  pageStatus: string;
}

class Filter extends React.Component<FilterProps, FilterState> {
  
  constructor(props:FilterProps){
    super(props);
    this.state = {filters:[{"strCategory":""}]}
  }
    
    // Using switch here, but forgot how weird block scoping can be weird with it
    // Works here but will likely use if statements elsewhere
    updateData = async () => {
      console.log(this.props.pageStatus)
      switch(this.props.pageStatus) {
	case "By Category":
	  let res = await getCategories()
	  console.log(res.drinks)
	  this.setState({filters:res.drinks})
	  break;
	case "By Ingredient":
	  let ans = await getIngredients()
	  this.setState({filters:ans.drinks})
	  break;
	case "By Serving Glass":
	  let data = await getGlasses()
	  this.setState({filters:data.drinks})
	  break;
	default:
	  this.setState({filters:[{"strCategory":""}]})
	}
      }

  async componentDidUpdate(prevProps: FilterProps) {
    if (prevProps.pageStatus !== this.props.pageStatus) {
      const res = await this.updateData();
      console.log(res)
    }
  }

  render() {
    let dropdown;
    if (this.props.pageStatus === "By Category"){
	const options = this.state.filters.map((item, index) => (
	  <option className="filter-dropdown-option">{item.strCategory}</option>
	));
	dropdown = (
	  <div>
	    <select className="filter-dropdown-select">{options}</select>
	  </div>
	);
     }
    if (this.props.pageStatus === "By Ingredient"){
	const options = this.state.filters.map((item, index) => (
	  <option className="filter-dropdown-option">{item.strIngredient1}</option>
	));
	dropdown = (
	  <div>
	    <select className="filter-dropdown-select">{options}</select>
	  </div>
	);
     }

    if (this.props.pageStatus === "By Serving Glass"){
	const options = this.state.filters.map((item, index) => (
	  <option className="filter-dropdown-option">{item.strGlass}</option>
	));
	dropdown = (
	<div>
	  <div>
	     <select className="filter-dropdown-select">{options}</select>
	  </div>
	  </div>
	);
     }

    return( 
    <div className="filter-buttons">
      {dropdown}
    </div>)
  }
}

export default Filter;
