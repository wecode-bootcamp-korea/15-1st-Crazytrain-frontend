import React from "react";
import CategorySidebar from "./Component/CategorySidebar/CategorySidebar";
import CategoryContent from "./Component/CategoryContent/CategoryContent";
import "./Category.scss";

class Category extends React.Component {
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
