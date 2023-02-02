import React from "react";
import "./grid.css"
import Item from "./item"
import {ItemProps} from "./item"
import { getRandomDrink } from "../services/drinks"

interface GridProps{
  pageStatus: string;
}

interface GridState{
  gridData : ItemProps[];
}

class Grid extends React.Component<GridProps, GridState>{
  
  constructor(props:GridProps){
    super(props);
    this.state = {gridData :[{ "id":"0","src":"", "title":"Test","description":"Test description"}]}
  }


  async componentDidMount() {
    if (this.props.pageStatus === "Suprise Me"){
      const data = []
      // Picked number 6 because it seemed like that would be enough to fill page
      for (let i=0; i < 6; i++){
	const res = await getRandomDrink()
	for(let i=0; i < res.drinks.length; i++){
	  data.push({ "id": res.drinks[i].idDrink,"src":res.drinks[i].strDrinkThumb,"title":res.drinks[i].strDrink,"description":res.drinks[i].strInstructions})
	}
      }
      this.setState({gridData:data})
    }
  }



   render(){
     return(
     <div className="grid-container">
      <div className="grid">
	{this.state.gridData.map((item) =><Item id={item.id} title={item.title} src={item.src} description={item.description} />)}
      </div>
    </div>
     )
   }

}

export default Grid

