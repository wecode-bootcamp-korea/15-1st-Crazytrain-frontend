import React, { Component } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import FilterCategories from "./Component/FilterCategories";
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

  onOutsideClick = () => {
    this.setState({
      clicked: false,
    });
  };

  render() {
    const { clicked } = this.state;
    const { category } = this.props;

    return (
      <li className="FilterControl">
        <OutsideClickHandler onOutsideClick={this.onOutsideClick}>
          <button
            onClick={this.buttonClick}
            className={clicked ? "changeColor" : ""}
          >
            <span className="CategoryName">{category.name}</span>
            <svg
              className={clicked ? "upIcon" : ""}
              width="12"
              height="12"
              fill={clicked ? "#37507d" : "#dadce0"}
            >
              <path d="M6.07 7.56l4.39-4.55.87.87-5.25 5.45L.67 3.9 1.53 3z"></path>
            </svg>
          </button>
          <div className={clicked ? "filterDropdown" : "hideBox"}>
            {category.subCategories.map((subCategory, index) => (
              <FilterCategories key={index} subCategory={subCategory} />
            ))}
          </div>
        </OutsideClickHandler>
      </li>
    );
  }
}

export default FilterControl;
