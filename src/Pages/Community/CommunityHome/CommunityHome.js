import React, { Component } from "react";
import FilterTap from "./FilterMenu/FilterTap";
import CommunityCardList from "./CommunityCardList/CommunityCardList";
import { API } from "../../../config";
import "./CommunityHome.scss";

const NUMBER_OF_ITEMS_TO_FETCH = 8;

class CommunityHome extends Component {
  state = {
    communityCards: [],
    currentIndex: 0,
  };

  componentDidMount() {
    this.fetchMoreData();
  }

  fetchMoreData = () => {
    fetch(`${API}/data/community/community_card.json`)
      .then(response => response.json())
      .then(result => {
        const { communityCards, currentIndex } = this.state;
        this.setState({
          communityCards: communityCards.concat(
            result.communityCards.slice(
              currentIndex,
              currentIndex + NUMBER_OF_ITEMS_TO_FETCH
            )
          ),
          currentIndex: currentIndex + NUMBER_OF_ITEMS_TO_FETCH,
        });
      });
  };
  render() {
    return (
      <>
        <nav>여기에는 이후에 완성된 네비게이션 컴포넌트가 올껍니다!</nav>
        <main className="CommunityHome">
          <div className="communityWrapper">
            <FilterTap />
            <CommunityCardList
              fetchMoreData={this.fetchMoreData}
              communityCards={this.state.communityCards}
            />
          </div>
        </main>
      </>
    );
  }
}
export default CommunityHome;
