import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handleClick() {
    fetch(process.env.API_URI)
      .then(res => res.json())
      .then(body => {
        this.setState({
          text: body.message
        });
      });
  }

  render() {
    return (
      <div>
        <h1>React app working</h1>
        <button onClick={() => this.handleClick()}>Test API</button>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
