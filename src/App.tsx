import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Grid from "./components/grid";


const pageStatus= "suprise me"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav title="Cocktails" subtitle="Welcome" />
      </header>
      <div>
	<Grid pageStatus={pageStatus}/>
      </div>
    </div>
  );
}

export default App;
