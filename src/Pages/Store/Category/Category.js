import React, { Component } from "react";
import CategorySidebar from "./CategoryHome/CategorySidebar/CategorySidebar";
import CategoryContent from "./CategoryHome/CategoryContent/CategoryContent";
import "./Category.scss";

class Category extends Component {
  render() {
    return (
      <div className="Category">
        <div className="categoryContainer">
          <CategorySidebar />
          <CategoryContent />
        </div>
      </div>
    );
  }
}

export default Category;
