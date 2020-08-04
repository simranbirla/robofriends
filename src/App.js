import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./Robots";
class App extends Component {
  state = { search: "", robots: robots };

  onInputChange = (input) => {
    this.setState({ search: input });
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.search.toLowerCase());
    });
    this.setState({ robots: filteredRobots });
  };

  render() {
    return (
      <div className="tc">
        <h1 className="tc" style={{ color: "yellowgreen" }}>
          ROBOT FRIENDS
        </h1>
        <SearchBox className="tc" onInputChange={this.onInputChange} />
        <CardList filteredRobots={this.state.robots} />
      </div>
    );
  }
}

export default App;
