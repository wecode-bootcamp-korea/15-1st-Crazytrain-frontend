import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CategoryDetail.scss";

// const TEST_SUB_SUB_CATEGORYS = ["test1", "test2", "test3", "test4", "test5"];

class CategoryDetail extends Component {
  state = {
    subClicked: false,
  };

  onMenuClick = () => {
    const { category, buttonClick } = this.props;

    this.setState(
      {
        subClicked: !this.state.subClicked,
      },
      () => {
        buttonClick(category.name, this.state.subClicked);
      }
    );
  };

  render() {
    const { onMenuClick } = this;
    const { category, clickValue } = this.props;

    return (
      <li className="CategoryDetail" onClick={onMenuClick}>
        <div className="listContainer addCursor">
          <Link
            to="#"
            className={category.name === clickValue ? "colorBlue" : ""}
          >
            {category.name}
          </Link>
          <button className="addCursor">
            <svg
              className={category.name === clickValue ? "upIcon" : ""}
              width="12"
              height="12"
            >
              <path d="M6.07 7.56l4.39-4.55.87.87-5.25 5.45L.67 3.9 1.53 3z"></path>
            </svg>
          </button>
        </div>
        <div className="expand">
          <ul
            className={
              category.name === clickValue ? "slideOutLeft" : "hideBox"
            }
          >
            {category.subSubCategories.map((category, index) => {
              return (
                <li key={index} className="expandTree">
                  <Link to="#">{category}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    );
  }
}

export default CategoryDetail;
