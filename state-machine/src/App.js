import "./App.css";
import { API } from "../src/constants/index";
import React, { useState, render, screen } from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      text: "",
      author: "",
      isFetching: "",
      error: "",
    }
  }

  render(){
    return (
      <div>
        <h1>Quote Of The Day</h1>
        <p>{this.state.text}</p>
        <p>{this.state.author}</p>
        <button>Get New Quote</button>
    </div>
    )
  }
}

export default App;
