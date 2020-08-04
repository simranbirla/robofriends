import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  renderList() {
    return this.props.filteredRobots.map((robot) => {
      return (
        <Card
          name={robot.name}
          username={robot.username}
          email={robot.email}
          id={robot.id}
          key={robot.id}
        />
      );
    });
  }
  render() {
    return <div className="tc">{this.renderList()}</div>;
  }
}

export default CardList;
