import React from "react";
import "./filter.css";
import { getIngredients } from "../services/ingredients";
import { getCategories} from "../services/categories";
import { getGlasses} from "../services/glasses";

interface Glass{
  strGlass:string;
}

interface Category{
  strCategory:string;
}

interface Ingredient{
  strIngredient1:string;
}

interface Filters{
  categories: Category[]
  ingredients: Ingredient[]
  glasses: Glass[]

}

interface FilterState {
  data: Filters
}

interface FilterProps {
  pageStatus: string;
  filterStatus: string;
  changeFilterStatus:Function;
}

class Filter extends React.Component<FilterProps, FilterState> {
  
  constructor(props:FilterProps){
    super(props);
    this.state = {data:{"categories": [{"strCategory":""}], "ingredients":[{"strIngredient1":""}],"glasses":[{"strGlass":""}]}}
  }
    
    // Using switch here, but forgot how weird block scoping can be weird with it
    // Works here but will likely use if statements elsewhere
    updateData = async () => {
	  const categories = await getCategories()
	  const ingredients = await getIngredients()
	  const glasses = await getGlasses()
	  const filterData = {"categories": categories.drinks, "ingredients":ingredients.drinks,"glasses":glasses.drinks}
	  console.log(filterData)
	  this.setState({data: filterData})
    }

  async componentDidMount(){
    this.updateData()
  }

  render() {
    let dropdown;
    if (this.props.pageStatus === "By Category"){
	const options = this.state.data.categories.map((item, index) => (
	  <option className="filter-dropdown-option">{item.strCategory}</option>
	));
	dropdown = (
	  <div>
	    <select  defaultValue="Ordinary Drink" onChange={(e)=>(this.props.changeFilterStatus(e.target.value))} className="filter-dropdown-select">{options}</select>
	  </div>
	);
     }
    if (this.props.pageStatus === "By Ingredient"){
	const options = this.state.data.ingredients.map((item, index) => (
	  <option className="filter-dropdown-option">{item.strIngredient1}</option>
	));
	dropdown = (
	  <div>
	    <select onChange={(e)=>(this.props.changeFilterStatus(e.target.value))} className="filter-dropdown-select">{options}</select>
	  </div>
	);
     }

    if (this.props.pageStatus === "By Serving Glass"){
	const options = this.state.data.glasses.map((item, index) => (
	  <option className="filter-dropdown-option">{item.strGlass}</option>
	));
	dropdown = (
	<div>
	  <div>
	     <select onChange={(e)=>(this.props.changeFilterStatus(e.target.value))}  className="filter-dropdown-select">
	       {options}
	     </select>
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
