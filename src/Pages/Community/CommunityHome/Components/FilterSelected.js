import React, { Component } from "react";
import "./FilterSelected.scss";

class FilterSelected extends Component {
  render() {
    const { selectedFilter, clearFilter } = this.props;
    return (
      <div className="FilterSelected">
        {selectedFilter.map(element => {
          return (
            <div className="container">
              {element.tapId === 5 ? (
                <div
                  style={{ backgroundColor: `${element.hashId}` }}
                  className="colors"
                ></div>
              ) : (
                <span>{element.name}</span>
              )}
              <div
                onClick={() => this.props.deleteFilter(element)}
                className="closeBtn"
              >
                X
              </div>
            </div>
          );
        })}
        {selectedFilter.length ? (
          <span onClick={clearFilter} className="initialize">
            초기화
          </span>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default FilterSelected;
