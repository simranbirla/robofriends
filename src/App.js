import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./Robots";
class App extends Component {
  state = { search: "", robots: robots };

  onInputChange = (input) => {
    this.setState({ search: input });
  };

  render() {
    return (
      <div className="tc">
        <h1 className="tc" style={{ color: "yellowgreen" }}>
          ROBOT FRIENDS
        </h1>
        <SearchBox className="tc" onInputChange={this.onInputChange} />
        <CardList search={this.state.search} />
      </div>
    );
  }
}

export default App;
