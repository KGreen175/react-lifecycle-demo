import React, { Component } from "react";
import "./Button.css";

class Counter extends Component {
  constructor(props) {
    console.log("--Constructor--");
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("--componentDidMount--");
  }

  componentDidUpdate() {
    console.log("--componentDidUpdate--");
  }

  componentWillUnmount() {
    console.log("--componentWillUnmount--");
  }

  onclick(type) {
    this.setState(prevState => {
      return {
        count: type === "add" ? prevState.count + 1 : prevState.count - 1
      };
    });
  }

  render() {
    console.log("--Render--");
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button className="button" onClick={this.onclick.bind(this, "add")}>
          +
        </button>
        <button className="button" onClick={this.onclick.bind(this, "sub")}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
