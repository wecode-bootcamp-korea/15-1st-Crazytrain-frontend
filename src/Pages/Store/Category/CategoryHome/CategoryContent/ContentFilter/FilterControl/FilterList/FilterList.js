import React, { Component } from "react";
import "./FilterList.scss";

class FilterList extends Component {
  state = {
    checked: false,
  };

  changeCheckbox = e => {
    const { addTag, removeTag } = this.props;
    this.setState(
      {
        checked: e.target.checked,
      },
      () => {
        if (e.target.checked)
          addTag({
            type: "none",
            text: e.target.value,
          });
        else
          removeTag({
            type: "none",
            text: e.target.value,
          });
      }
    );
  };

  changeRadio = e => {
    let minPrice = "0";
    let maxPrice = "83,400,000";
    const priceArray = e.target.value.split(" ~ ");

    if (priceArray.length > 1) {
      minPrice = priceArray.map(price => price.split("원"))[0][0];
      maxPrice = priceArray.map(price => price.split("원"))[1][0];
    } else {
      if (priceArray[0].includes("이상")) {
        minPrice = priceArray[0].split("원")[0];
      } else if (priceArray[0].includes("이하")) {
        maxPrice = priceArray[0].split("원")[0];
      }
    }

    this.props.changeInputValue(minPrice, maxPrice, e.target.value);
  };

  render() {
    const { type, filterListItem } = this.props;

    return (
      <div className="FilterList">
        {type !== "radio" ? (
          <input
            name={type}
            type={type}
            value={filterListItem}
            checked={this.state.checked}
            onChange={this.changeCheckbox}
          />
        ) : (
          <input
            name={type}
            type={type}
            value={filterListItem}
            onChange={this.changeRadio}
          />
        )}
        <label htmlFor={filterListItem} className="filterListItem">
          {filterListItem}
        </label>
      </div>
    );
  }
}

export default FilterList;
