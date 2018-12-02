import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Color from "./Color";

class App extends Component {
  state = {
    text: "Color"
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { text } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input
            type="text"
            name="text"
            value={text}
            onChange={e => this.onInputChange(e)}
          />
          <Color text={text} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
