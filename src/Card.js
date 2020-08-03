import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
        <img src="https://robohash.org/ohno" alt="robot" />
        <div>
          <h2>Wall-E</h2>
          <p>waale@wall.com</p>
        </div>
      </div>
    );
  }
}
