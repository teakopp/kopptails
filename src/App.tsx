import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Grid from "./components/grid";
import Filter from "./components/filter";

interface AppState {
  pageStatus: string;
  filterStatus: string;
}

// Using any as type here because eslint is very unhappy with {}
// but ok with any. 
//
// Todo find type for this
class App extends React.Component<any, AppState> {
  constructor(props = {}) {
    super(props);
    this.state = { filterStatus: "", pageStatus: "Suprise Me" };
  }

  // Tried to keep data in app pretty small
  // so these two states were neccessary to control
  // flow of data
  //
  // pageStatus are the categories the users can pick
  // in the sidebar. They control what kind of filters will be selected
  // and generally control the change of pages
  //
  // Important to not change spelling of pageStatus options
  changePageStatus = async (status: string) => {
    this.setState({ pageStatus: status });
  };

  // Had to put this outside of filter component in order
  // to make proper service calls in grid so correct data is pulled
  //
  // Todo use filters to avoid incorrect empty string from occaionally
  // making their way into calls in grid.tsx. Then can remove blocking measures
  changeFilterStatus = async (status: string) => {
    this.setState({ filterStatus: status });
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
          <Filter
            changeFilterStatus={this.changeFilterStatus}
            filterStatus={this.state.filterStatus}
            pageStatus={this.state.pageStatus}
          />
        </div>
        <div>
          <Grid
            filterStatus={this.state.filterStatus}
            pageStatus={this.state.pageStatus}
          />
        </div>
      </div>
    );
  }
}

export default App;
