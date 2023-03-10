import React from "react";
import "./sublist.css";

interface SublistState {
  isOpen: boolean;
}

interface SublistProps {
  mainItemName: string;
  sublistItemNames: string[];
  changePageStatus: any;
}

class Sublist extends React.Component<SublistProps, SublistState> {
  constructor(props: SublistProps) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleList = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };

  list = this.props.sublistItemNames.map((item, index) => (
    <div className="sublist-item" key={index}>
      <button
        key={index}
        onClick={(e) =>
          this.props.changePageStatus((e.target as HTMLElement).innerText)
        }
        className="sublist-button"
      >
        {item}
      </button>
    </div>
  ));

  render() {
    return (
      <div className="sublist">
        <div className="sidebar-button-container">
          <button
            key={this.props.mainItemName}
            onClick={this.toggleList}
            className="sidebar-button"
          >
            {this.props.mainItemName}
          </button>
        </div>
        <div className="sublist-items">
          {this.state.isOpen ? this.list : <div></div>}
        </div>
      </div>
    );
  }
}

export default Sublist;
