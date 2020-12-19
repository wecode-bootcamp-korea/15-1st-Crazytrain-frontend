import React, { Component } from "react";
import "./FilterSelected.scss";

class FilterSelected extends Component {
  render() {
    const { selectedFilter, clearFilter } = this.props;
    const selectedFilterList = selectedFilter.map(element => {
      return (
        <div
          onClick={() => this.props.deleteFilter(element)}
          className="container addCursor"
        >
          {element.tapId === 5 ? (
            <div
              style={{ backgroundColor: `${element.hashId}` }}
              className="colors"
            ></div>
          ) : (
            <span>{element.name}</span>
          )}
          <div className="closeBtn">X</div>
        </div>
      );
    });
    const clearButton = selectedFilter.length ? (
      <span onClick={clearFilter} className="clearButton">
        초기화
      </span>
    ) : (
      ""
    );

    return (
      <div className="FilterSelected">
        {selectedFilterList}
        {clearButton}
      </div>
    );
  }
}

export default FilterSelected;
