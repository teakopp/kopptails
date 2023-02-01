import React from "react";
import "./grid.css"
import Item from "./item"
import {ItemProps} from "./item"

interface GridProps{
  data: ItemProps[]
}

class Grid extends React.Component<GridProps>{
  generateTableItems = this.props.data.map((item, index) =>
    <Item src={item.src} title={item.title} description={item.description} />
   )
   render(){
     return(
      <div className="grid">
	{this.generateTableItems}
      </div>
     )
   }

}

export default Grid

