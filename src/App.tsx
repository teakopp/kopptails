import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Grid from "./components/grid";
import Filter from "./components/filter";

interface AppState {
  pageStatus: string;
  filterStatus: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props = {}) {
    super(props);
    this.state = { filterStatus: "", pageStatus: "Suprise Me" };
  }

  changePageStatus = async (status: string) => {
    this.setState({ pageStatus: status});
  };

  changeFilterStatus = async (status: string) => {
    this.setState({ filterStatus: status});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav
            title="Cocktails"
            subtitle={this.state.pageStatus}
            changePageStatus={this.changePageStatus}
          />
        </header>
	<div>
	  <Filter changeFilterStatus={this.changeFilterStatus} filterStatus={this.state.filterStatus} pageStatus={this.state.pageStatus}/>
	</div>
        <div>
          <Grid filterStatus={this.state.filterStatus} pageStatus={this.state.pageStatus} />
        </div>
      </div>
    );
  }
}

export default App;
