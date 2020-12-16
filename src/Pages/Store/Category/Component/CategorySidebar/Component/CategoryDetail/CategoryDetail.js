import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CategoryDetail.scss";

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
      <li className="CategoryDetail">
        <div className="listContainer addCursor">
          <Link to="#">{category}</Link>
          <button onClick={this.buttonClick} className="addCursor">
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
            <li className="expandTree">
              <Link to="#">test1</Link>
            </li>
            <li className="expandTree">
              <Link to="#">test2</Link>
            </li>
            <li className="expandTree">
              <Link to="#">test3</Link>
            </li>
            <li className="expandTree">
              <Link to="#">test4</Link>
            </li>
          </ul>
        </div>
      </li>
    );
  }
}

export default CategoryDetail;
