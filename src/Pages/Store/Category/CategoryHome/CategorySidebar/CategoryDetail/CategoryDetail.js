import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CategoryDetail.scss";

const TEST_SUB_SUB_CATEGORYS = ["test1", "test2", "test3", "test4", "test5"];

class CategoryDetail extends Component {
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
    const { category } = this.props;

    return (
      <li className="CategoryDetail" onClick={this.buttonClick}>
        <div className="listContainer addCursor">
          <Link to="#">{category}</Link>
          <button className="addCursor">
            <svg
              className={this.state.clicked ? "upIcon" : ""}
              width="12"
              height="12"
            >
              <path d="M6.07 7.56l4.39-4.55.87.87-5.25 5.45L.67 3.9 1.53 3z"></path>
            </svg>
          </button>
        </div>
        <div className="expand">
          <ul className={this.state.clicked ? "slideOutLeft" : "hideBox"}>
            {TEST_SUB_SUB_CATEGORYS.map((categories, index) => {
              return (
                <li key={index} className="expandTree">
                  <Link to="#">{categories}</Link>
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
