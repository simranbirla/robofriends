import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./Robots";
import Scroll from "./Scroll";
class App extends Component {
  state = { search: "", robots: [] };

  componentDidMount() {
    this.setState({ robots: robots });
  }

  onInputChange = (input) => {
    this.setState({ search: input });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.search.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="tc" style={{ color: "yellowgreen" }}>
          ROBOT FRIENDS
        </h1>
        <SearchBox className="tc" onInputChange={this.onInputChange} />
        <Scroll>
          <CardList filteredRobots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
