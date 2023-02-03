import React from "react";

interface SubListProps{
  isOpen: false;
  dropDownButtonName:string;
  buttons:string;
}

class SubList extends React.Component<SubListProps>{

  openList = async() =>{
  }

  dropDownButton = (name:string) => {
    <div className="dropdown-button"><button
      className="sidebar-button"
      onClick={}>
      {this.props.dropDownButtonName}
    </button></div>
  }
  
  buttons = () =>{
  }
  
  render(){
    return(
    <div className="sublist">
    </div>
    )
  }
  
}
