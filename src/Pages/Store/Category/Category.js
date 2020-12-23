import React, { Component } from "react";
import CategorySidebar from "./CategoryHome/CategorySidebar/CategorySidebar";
import CategoryContent from "./CategoryHome/CategoryContent/CategoryContent";
import "./Category.scss";

// const API = "http://10.168.2.136"; // 수한님 서버 통신 연습

class Category extends Component {
  state = {
    categories: [],
    selectCategory: {},
    unSelectCategory: [],
    categoryId: 1,
    clicked: false,
    clickValue: "",
  };

  componentDidMount() {
    const { categoryId } = this.state;
    // fetch(`${API}:8000/menu/category`) // 수한님 서버 통신 연습
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

  buttonClick = (value, clicked) => {
    this.setState({
      clicked: clicked,
      clickValue: value,
    });
  };

  clickCategory = e => {
    this.selectCategory(Number(e.target.id));
  };

  selectCategory = id => {
    const { categories } = this.state;

    this.setState({
      selectCategory: categories.filter(
        category => category.categoryId === id
      )[0],
      unSelectCategory: categories.filter(
        category => category.categoryId !== id
      ),
      clickValue: "",
    });
  };

  render() {
    const {
      selectCategory,
      unSelectCategory,
      clicked,
      clickValue,
    } = this.state;
    const { clickCategory, buttonClick } = this;

    return (
      <div className="Category">
        <div className="categoryContainer">
          <CategorySidebar
            selectCategory={selectCategory}
            unSelectCategory={unSelectCategory}
            clickCategory={clickCategory}
            clicked={clicked}
            clickValue={clickValue}
            buttonClick={buttonClick}
          />
          <CategoryContent
            clickValue={clickValue}
            selectCategory={selectCategory}
          />
        </div>
      </div>
    );
  }
}

export default Category;
