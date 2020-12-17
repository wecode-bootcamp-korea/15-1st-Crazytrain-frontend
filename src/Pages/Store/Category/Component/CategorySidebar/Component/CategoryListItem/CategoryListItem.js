import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CategoryListItem.scss";

class CategoryListItem extends Component {
  render() {
    const { category, clickCategory } = this.props;

    return (
      <li className="categoryListItem" onClick={clickCategory}>
        <Link id={category.categoryId} to="#">
          {category.category}
        </Link>
      </li>
    );
  }
}

export default CategoryListItem;
