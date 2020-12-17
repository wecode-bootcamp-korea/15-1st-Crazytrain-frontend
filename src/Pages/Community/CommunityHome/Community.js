import React, { Component } from "react";
import FilterTap from "./Components/FilterTap";
import CommunityCardList from "./Components/CommunityCardList";
import { API } from "../../../config";
import "./Community.scss";

class Community extends Component {
  state = {
    communityCards: [],
    currentIndex: 0,
    NUMBER_OF_ITEMS_TO_FETCH: 12,
  };

  componentDidMount() {
    this.fetchMoreData();
  }

  fetchMoreData = () => {
    fetch(`${API}/data/community/data.json`)
      .then(response => response.json())
      .then(result => {
        const {
          communityCards,
          currentIndex,
          NUMBER_OF_ITEMS_TO_FETCH,
        } = this.state;
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
        <main className="communityBody">
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

export default Community;
