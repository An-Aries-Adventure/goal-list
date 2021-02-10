
import './App.css';
import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AppNavBar from "../src/components/appnavbar"
import GoalList from "../src/components/goallist"

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Test</h1>
      {/* <AppNavBar/>
      <GoalList/> */}
      </div>
    );
  }
}

export default App;
