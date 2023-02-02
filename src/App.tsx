import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Grid from "./components/grid";


interface AppState{
  pageStatus:string;
}

class App extends React.Component<{},AppState>{
  constructor(props={}){
    super(props)
    this.state = {pageStatus:"Suprise Me"}
  }

  changePageStatus = (status:string) => {
    this.setState({pageStatus:status})
    console.log(status)
  }

  render(){
    return (
      <div className="App">
	<header className="App-header">
	  <Nav title="Cocktails" subtitle={this.state.pageStatus} changePageStatus={this.changePageStatus}/>
	</header>
	<div>
	  <Grid pageStatus={this.state.pageStatus}/>
	</div>
      </div>
    );
  }
}

export default App;
