import React, { Component } from "react";
import "./FilterControl.scss";

class FilterControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  buttonClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    const { clicked } = this.state;
    return (
      <li className="FilterControl">
        <button
          onClick={this.buttonClick}
          className={clicked ? "changeColor" : ""}
        >
          <span className="CategoryName">{this.props.category}</span>
          <svg
            className={clicked ? "upIcon" : ""}
            width="12"
            height="12"
            fill={clicked ? "#37507d" : "#dadce0"}
          >
            <path d="M6.07 7.56l4.39-4.55.87.87-5.25 5.45L.67 3.9 1.53 3z"></path>
          </svg>
        </button>
      </li>
    );
  }
}

export default FilterControl;
