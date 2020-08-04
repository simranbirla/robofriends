import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends Component {
  state = { search: "" };

  onInputChange = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div className="tc">
        <h1 className="tc" style={{ color: "yellowgreen" }}>
          ROBOT FRIENDS
        </h1>
        <SearchBox className="tc" onInputChange={this.onInputChange} />
        <CardList />
      </div>
    );
  }
}

export default App;
