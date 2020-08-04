import React from "react";

class SearchBox extends React.Component {
  onInput = (e) => {
    this.props.onInputChange(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter friends"
          className="pa3 ma3 tc"
          onChange={(e) => this.onInput(e)}
        />
      </div>
    );
  }
}

export default SearchBox;
