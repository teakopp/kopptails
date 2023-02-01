import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Grid from "./components/grid";

// Dummy data
const gridData = [{"src":"https://www.thecocktaildb.com/images/media/drink/iixv4l1485620014.jpg", "title":"Test","description":"test"}]
gridData.push(gridData[0])
gridData.push(gridData[0])
gridData.push(gridData[0])
gridData.push(gridData[0])
gridData.push(gridData[0])
gridData.push(gridData[0])
gridData.push(gridData[0])


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav title="Cocktails" subtitle="Welcome" />
      </header>
      <div>
      <Grid data={gridData}/>
      </div>
    </div>
  );
}

export default App;
