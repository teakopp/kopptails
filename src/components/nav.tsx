import React from "react";
import "./nav.css";
import search from "../icons/magnifying-glass-solid.svg";
import menu from "../icons/bars-solid.svg";
import SideBar from "./sidebar"
import IconButton from "./icon-button"


interface NavProps {
  title: string;
  subtitle: string;
}

interface NavState{
  sidebarOpen: boolean;
}

class Nav extends React.Component<NavProps, NavState> {
  constructor(props: NavProps){
    super(props);
    this.state = {sidebarOpen: false}
  }

  handleClick = () => {
    if (this.state.sidebarOpen){
      this.setState({sidebarOpen: false}) 
    }
    else{
      this.setState({sidebarOpen: true}) 
    }
  };

  render(){
    let sideMenu;
    if (this.state.sidebarOpen){
     sideMenu = <SideBar items={["Discover","Suprise Me"]}/> 
    }
    return (
      <div className="Nav">
	<header className="nav-title">
	  <div>{this.props.title}</div>
	</header>
	<div>{sideMenu}</div>
	<div className="nav-container">
	    <div className="nav-item">
	      <IconButton handleClick={this.handleClick} src={menu} alt="menu" />
	  </div>
	  <div className="nav-item">
	    <div className="nav-location">
	      <div>{this.props.subtitle}</div>
	    </div>
	  </div>
	  <div className="nav-item">
	    <IconButton handleClick={this.handleClick} src={search} alt="search" />
	  </div>
	</div>
	<div className="line"></div>
	<div></div>
      </div>
    );
  }
}
export default Nav;
