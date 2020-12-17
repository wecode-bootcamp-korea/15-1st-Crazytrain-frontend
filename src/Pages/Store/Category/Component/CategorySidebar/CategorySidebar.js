import React, { Component } from "react";
import CategoryDetail from "./Component/CategoryDetail/CategoryDetail";
import CategoryListItem from "./Component/CategoryListItem/CategoryListItem";
import "./CategorySidebar.scss";

class CategorySidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectCategory: {},
      unSelectCategory: [],
      categoryId: 0,
    };
  }

  clickCategory = e => {
    this.selectCategory(Number(e.target.id));
  };

  componentDidMount() {
    const { categoryId } = this.state;
    fetch("/data/store/data.json")
      .then(response => response.json())
      .then(result => {
        this.setState(
          {
            categories: result.categories,
          },
          () => {
            this.selectCategory(categoryId);
          }
        );
      });
  }

  selectCategory = id => {
    const { categories } = this.state;
    this.setState({
      selectCategory: categories.filter(
        category => category.categoryId === id
      )[0],
      unSelectCategory: categories.filter(
        category => category.categoryId !== id
      ),
    });
  };

  render() {
    const { selectCategory, unSelectCategory } = this.state;
    const { clickCategory } = this;

    return (
      <div className="CategorySidebar">
        <h2 className="selectCategory">{selectCategory?.category}</h2>
        <ul className="categoryDetailContainer">
          {selectCategory.subCategory?.map((item, index) => (
            <CategoryDetail category={item} key={index} />
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
