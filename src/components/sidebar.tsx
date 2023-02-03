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

  generateListItems = this.props.items.map((item,index) => (
    <Sublist mainItemName={item.name} subListItemNames={item.dropdowns}/>
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
      </div>
    );
  }
}

export default SideBar;
