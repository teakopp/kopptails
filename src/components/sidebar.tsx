import React from "react";
import "./sidebar.css"
import closeButton from "../icons/x-solid.svg"
import IconButton from "./icon-button"


interface SideBarProps{
  items: string[];
  changePageStatus: Function;
  handleClick: React.MouseEventHandler<HTMLImageElement>;
}

class SideBar extends React.Component<SideBarProps>{
  generateListItems = this.props.items.map((item, index) =>
    <button className="sidebar-button" key={index} onClick={e => this.props.changePageStatus((e.target as HTMLElement).innerText)}>{item}</button>
  )
    
  render(){
    return(
	<div className="sidebar">
	    <div className="close-button">
	      <IconButton handleClick={this.props.handleClick}src={closeButton} alt="close" />
	    </div>
	  <div className="sidebar-list">
	  {this.generateListItems}
	  </div>
	  <div>
	  </div>
	</div>
      )
  }
}

export default SideBar;
