import React, { Component } from "react";
import CardList from "./CardList";
class App extends Component {
  render() {
    return (
      <div>
        <h1 className="tc" style={{ color: "yellowgreen" }}>
          ROBOT FRIENDS
        </h1>
        <CardList />
      </div>
    );
  }
}

export default App;
