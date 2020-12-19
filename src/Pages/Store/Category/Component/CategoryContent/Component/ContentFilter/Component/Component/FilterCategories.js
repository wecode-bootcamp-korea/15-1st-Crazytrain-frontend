import React, { Component } from "react";
import "./FilterCategories.scss";

class FilterCategories extends Component {
  render() {
    return (
      <div className="FilterCategories">
        <input id="test" type="checkbox" />
        <div className="subCategory">{this.props.subCategory}</div>
      </div>
    );
  }
}

export default FilterCategories;
