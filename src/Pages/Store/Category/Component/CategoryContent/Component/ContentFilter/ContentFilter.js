import React, { Component } from "react";
import FilterControl from "./Component/FilterControl";
import "./ContentFilter.scss";

const filterCategories = ["가격", "색상", "우드톤", "소재", "배송"];

class ContentFilter extends Component {
  render() {
    return (
      <div className="ContentFilter">
        <div className="controllList">
          <ul>
            {filterCategories.map((category, index) => (
              <FilterControl key={index} category={category} />
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
