import React, { Component } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import FilterList from "../FilterList/FilterList";
import "./FilterControl.scss";

class FilterControl extends Component {
  state = {
    clicked: false,
    minPrice: "",
    maxPrice: "",
    priceFilter: {
      type: "",
      text: "",
    },
  };

  changeInputValue = (min, max, priceFilter) => {
    this.setState({
      minPrice: min,
      maxPrice: max,
      priceFilter: {
        type: "price",
        text: priceFilter,
      },
    });
  };

  buttonClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  onOutsideClick = () => {
    this.setState({
      clicked: false,
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.addTag(this.state.priceFilter);
  };

  render() {
    const { onOutsideClick, buttonClick, submitForm, changeInputValue } = this;
    const { clicked, minPrice, maxPrice } = this.state;
    const { category, name, addTag, removeTag } = this.props;

    return (
      <li className="FilterControl">
        <OutsideClickHandler onOutsideClick={onOutsideClick}>
          <button
            onClick={buttonClick}
            className={clicked ? "changeColor" : ""}
          >
            <span className="CategoryName">{category.name}</span>
            <svg
              className={clicked ? "upIcon" : ""}
              width="12"
              height="12"
              fill={clicked ? "#37507d" : "#dadce0"}
            >
              <path d="M6.07 7.56l4.39-4.55.87.87-5.25 5.45L.67 3.9 1.53 3z"></path>
            </svg>
          </button>

          <div
            className={`${clicked ? "filterDropdown" : "hideBox"} ${
              name === "가격" ? "pricePanelContainer" : ""
            }`}
          >
            {name === "가격" && (
              <div className="pricePanel">
                <form onSubmit={submitForm}>
                  <span>
                    <input
                      className="price"
                      name="formCheck"
                      type="text"
                      width="5"
                      placeholder="0"
                      value={minPrice}
                      readOnly
                    />
                  </span>
                  <span> 원</span>
                  <span> ~ </span>
                  <span>
                    <input
                      className="price"
                      name="formCheck"
                      type="text"
                      width="5"
                      placeholder="83,400,000"
                      value={maxPrice}
                      readOnly
                    />
                  </span>
                  <span> 원</span>
                  <button className="submitButton">적용</button>
                </form>
              </div>
            )}

            {category.filterListItems.map((filterListItem, index) => (
              <FilterList
                key={index}
                filterListItem={filterListItem}
                type={name === "가격" ? "radio" : "checkbox"}
                addTag={addTag}
                removeTag={removeTag}
                defaultChecked={category.filterListItems[0]}
                changeInputValue={changeInputValue}
              />
            ))}
          </div>
        </OutsideClickHandler>
      </li>
    );
  }
}

export default FilterControl;
