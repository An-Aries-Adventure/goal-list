
import './App.css';
import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AppNavBar from "../src/components/appnavbar"

class App extends Component {
  render(){
    return (
      <div className="App">
      <AppNavBar/>
      </div>
    );
  }
}

export default App;
