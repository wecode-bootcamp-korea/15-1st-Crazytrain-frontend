import React, { Component } from "react";
import "./FilterTapCard.scss";

class FilterTapCard extends Component {
  render() {
    const { id, name, subTap } = this.props.filterTapCard;
    const isSelectedClassNeeded = this.props.isSelected ? "selected" : "";
    const subTapList = subTap.map(tap => {
      return (
        <div className="subContainer" onClick={() => this.props.addFilter(tap)}>
          {id === 5 ? (
            <div
              className="color"
              style={{ backgroundColor: `${tap.hashId}` }}
            ></div>
          ) : (
            ""
          )}
          <span className="subName">{tap.name}</span>
        </div>
      );
    });
    return (
      <div className="FilterTapCard">
        <div className={`filter addCursor ${isSelectedClassNeeded}`} key={id}>
          {name}
          <svg width="12" height="12">
            <path d="M6.07 7.56l4.39-4.55.87.87-5.25 5.45L.67 3.9 1.53 3z"></path>
          </svg>
        </div>
        <span className="filterCardWrapper">
          <div className="filterSub">{subTapList}</div>
        </span>
      </div>
    );
  }
}

export default FilterTapCard;
