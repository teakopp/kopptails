import React from "react";
import "./sidebar.css";
import closeButton from "../icons/x-solid.svg";
import IconButton from "./icon-button";

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
  makeDropdownButton =(item: Item,index:number) =>{
    return (<div className="dropdown"><button
      className="sidebar-button dropdown-button"
      key={index}
      onClick={(e) =>
        this.props.changePageStatus((e.target as HTMLElement).innerText)
      }
    >
      {item.name}
    </button></div>)
  }

  pickButton = (item: Item,index:number) =>{
    if (item.dropdowns.length > 0){
      return this.makeRegularButton(item,index)
    }
    else{
      return this.makeRegularButton(item,index)
    }
  }

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
