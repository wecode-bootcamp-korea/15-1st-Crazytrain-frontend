import React from "react";
import CategoryDetail from "./Component/CategoryDetail/CategoryDetail";
import CategoryListItem from "./Component/CategoryListItem/CategoryListItem";
import "./Category.scss";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoryId: 0,
    };
  }

  clickCategory = e => {
    // console.log(typeof e.target.id);
    // console.log(typeof this.state.categoryId);
    this.setState({ categoryId: Number(e.target.id) });
  };

  componentDidMount() {
    fetch("/data/store/data.json")
      .then(response => response.json())
      .then(result => {
        this.setState({
          categories: result.categories,
        });
      });
  }

  render() {
    const { categories, categoryId } = this.state;
    const { clickCategory } = this;
    const selectCategory =
      categories &&
      categories.filter(category => category.categoryId === categoryId);
    const unSelectCategory =
      categories &&
      categories.filter(category => category.categoryId !== categoryId);

    return (
      <div className="Category">
        <div className="categoryContainer">
          <div className="categorySidebar">
            <h2 className="selectCategory">
              {selectCategory[0] && selectCategory[0].category}
            </h2>
            <ul className="categoryDetailContainer">
              {selectCategory[0] &&
                selectCategory[0].subCategory.map((item, index) => (
                  <CategoryDetail category={item} key={index} />
                ))}
            </ul>
            <ul className="categoryList">
              {unSelectCategory &&
                unSelectCategory.map((category, index) => (
                  <CategoryListItem
                    key={index}
                    category={category}
                    clickCategory={clickCategory}
                  />
                ))}
            </ul>
          </div>
          <div className="categoryContent">content</div>
        </div>
      </div>
    );
  }
}

export default Category;
