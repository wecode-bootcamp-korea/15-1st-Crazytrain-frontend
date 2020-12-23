import React, { Component } from "react";
import CategoryDetail from "./CategoryDetail/CategoryDetail";
import CategoryListItem from "./CategoryListItem/CategoryListItem";
import "./CategorySidebar.scss";

class CategorySidebar extends Component {
  render() {
    const { clicked, clickValue, buttonClick } = this.props;
    const { selectCategory, unSelectCategory, clickCategory } = this.props;

    return (
      <div className="CategorySidebar">
        <h2 className="selectCategory">{selectCategory?.category}</h2>
        <ul className="categoryDetailContainer">
          {selectCategory.subCategories?.map((category, index) => (
            <CategoryDetail
              buttonClick={buttonClick}
              category={category}
              key={index}
              clicked={clicked}
              clickValue={clickValue}
            />
          ))}
        </ul>
        <ul className="categoryList">
          {unSelectCategory?.map((category, index) => (
            <CategoryListItem
              key={index}
              category={category}
              clickCategory={clickCategory}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default CategorySidebar;
