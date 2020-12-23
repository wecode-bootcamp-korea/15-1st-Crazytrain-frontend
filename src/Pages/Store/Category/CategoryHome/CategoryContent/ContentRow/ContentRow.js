import React, { Component } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import StoreCardList from "./StoreCardList/StoreCardList";
import { API } from "../../../../../../config";
import "./ContentRow.scss";

const FILTER_CATEGORYS = [
  "판매순",
  "인기순",
  "낮은가격순",
  "높은가격순",
  "많은리뷰순",
  "유저사진 많은순",
  "최신순",
];

class ContentRow extends Component {
  state = {
    clicked: false,
    totalCards: [],
    storeCards: [],
    currentIndex: 0,
    NUMBER_OF_ITEMS_TO_FETCH: 12,
    filterName: "판매순",
  };

  componentDidMount() {
    this.fetchMoreData();
  }

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

  onChange = e => {
    this.setState({
      filterName: e.target.value,
    });
  };

  fetchMoreData = () => {
    fetch(`${API}/data/store/products.json`)
      .then(response => response.json())
      .then(result => {
        const {
          storeCards,
          currentIndex,
          NUMBER_OF_ITEMS_TO_FETCH,
        } = this.state;

        this.setState({
          totalCards: result.salesArticles,
          storeCards: storeCards.concat(
            result.salesArticles.slice(
              currentIndex,
              currentIndex + NUMBER_OF_ITEMS_TO_FETCH
            )
          ),
          currentIndex: currentIndex + NUMBER_OF_ITEMS_TO_FETCH,
        });
      });
  };

  render() {
    const { onOutsideClick } = this;
    // const { clickValue } = this.props;ss

    return (
      <div className="ContentRow">
        <div className="summary">
          <span className="summaryLeft">
            전체 {this.state.totalCards.length}개
          </span>
          <div className="summaryFilter">
            <button className="summaryRight" onClick={this.buttonClick}>
              {this.state.filterName}
              <svg className="icon" width="8" height="8" viewBox="0 0 8 8">
                <path fill="#BDBDBD" d="M0 2l4 4 4-4z"></path>
              </svg>
            </button>
            <OutsideClickHandler onOutsideClick={onOutsideClick}>
              <div
                className={this.state.clicked ? "filterDropdown" : "hideBox"}
              >
                {FILTER_CATEGORYS.map((category, index) => (
                  <div className="filterList" key={index}>
                    <input
                      name="mainfilter"
                      type="radio"
                      value={category}
                      onChange={this.onChange}
                    />

                    <label htmlFor={category} className="mainfilterItem">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </OutsideClickHandler>
          </div>
        </div>
        <StoreCardList
          fetchMoreData={this.fetchMoreData}
          storeCards={this.state.storeCards}
        />
      </div>
    );
  }
}

export default ContentRow;
