import React from "react";

interface SublistProps{
  isOpen?: false;
  mainItemName:string;
  subListItemNames:string[];
}

class Sublist extends React.Component<SublistProps>{

  openList = async() =>{
  }

  list = this.props.subListItemNames.map((item,index) => (
      <div className="sublist-item" key={index}>
	<button>{item}</button>
      </div>
  ))

  render(){
    return(
    <div className="sublist">
    <button
      className="sidebar-button"
      onClick={this.openList}>
      {this.props.mainItemName}
    </button>
    {this.list}
    </div>
    )
  }
  
}

export default Sublist
