import React from "react";
import "./sidebar.css";
import closeButton from "../icons/x-solid.svg";
import IconButton from "./icon-button";
import Sublist from "./sublist"

interface Item{
  name:string
  dropdowns:string[]
}

interface SideBarProps {
  items: Item[];
  changePageStatus: Function;
  handleClick: React.MouseEventHandler<HTMLImageElement>;
}

class SideBar extends React.Component<SideBarProps> {
  
  // Generate a regular button if no sublist items are
  // This makes button directly clickable instead of collapseable
  // onClick is bound to function to grab value from button
  // for closing menu or changing page
  makeRegularButton = (item: Item,index:number) =>{
    return (<div><button
      className="sidebar-button"
      key={index}
      onClick={(e) =>
        this.props.changePageStatus((e.target as HTMLElement).innerText)
      }
    >
      {item.name}
    </button></div>)
  }

  // Decides what button will be picked
  // Either sublist collapseable button or 
  // regular clickable button
  pickButton = (item: Item,index:number) =>{
    // if there are dropdown items included in prop data
    // make it a sublist
    if (item.dropdowns.length > 0){
      return <Sublist changePageStatus={this.props.changePageStatus} mainItemName={item.name} sublistItemNames={item.dropdowns}/>
    }
    else{
      return this.makeRegularButton(item,index)
    }
  }
  
  // put all the items together to be rendered
  generateListItems = this.props.items.map((item,index) => (
    this.pickButton(item,index)
  ))
  

  render() {
    return (
      <div className="sidebar">
        <div className="close-button">
          <IconButton
            handleClick={this.props.handleClick}
            src={closeButton}
            alt="close"
          />
        </div>
        <div className="sidebar-list">{this.generateListItems}</div>
        <div></div>
      </div>
    );
  }
}

export default SideBar;
