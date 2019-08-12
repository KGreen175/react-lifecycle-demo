import React, { Component } from "react";
import Counter from "./components/Counter";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: false
    };

    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello Lifecycle</h1>
        <button
          className="button"
          onClick={this.mountCounter}
          disabled={this.state.mount}
        >
          Mount Counter
        </button>
        <button
          className="button"
          onClick={this.unmountCounter}
          disabled={!this.state.mount}
        >
          Unmount Counter
        </button>
        {this.state.mount ? <Counter /> : null}
      </div>
    );
  }
}

export default App;
