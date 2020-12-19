import React, { Component } from "react";
import FilterControl from "./Component/FilterControl";
import "./ContentFilter.scss";

class ContentFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    fetch("/data/store/filterCategories.json")
      .then(response => response.json())
      .then(result => {
        this.setState({
          categories: result.categories,
        });
      });
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="ContentFilter">
        <div className="controllList">
          <ul>
            {categories.length > 0 &&
              categories.map(category => (
                <FilterControl key={category.name} category={category} />
              ))}
          </ul>
        </div>
        <div className="summary">
          <span className="summaryLeft">전체 74,709개</span>
          <button className="summaryRight">
            많은리뷰순
            <svg className="icon" width="8" height="8" viewBox="0 0 8 8">
              <path fill="#BDBDBD" d="M0 2l4 4 4-4z"></path>
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default ContentFilter;
