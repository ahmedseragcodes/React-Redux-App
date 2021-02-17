import "./App.css";
import { API } from "../src/constants/index";
import React, { useState, render, screen } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import axios from "axios";
import { getQuote } from "./actions/quoteActions";

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

  // componentDidMount(){
  //   axios.get(`${API}`)
  //   .then((res)=>{
  //     console.log(res.data)
  //     this.setState({
  //       ...this.state,
  //       text: res.data[0].text,
  //       author: res.data[0].author
  //     })
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }

  handleClick=()=>{
    this.props.getQuote();
  }

  render(){
    return (
      <div>
        <h1>Quote Of The Day</h1>
        <p>{this.props.text}</p>
        <p>{this.props.author}</p>
        <button onClick={this.handleClick}>Get New Quote</button>
    </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return ({
    text: state.text,
    author: state.author,
    isFetching: state.isFetching,
    error: state.error
  })
}

export default connect(mapStateToProps, { getQuote }) (App);
