import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CommunityCard from "./CommunityCard";
import "./CommunityCardList.scss";

class CommunityCardList extends React.Component {
  render() {
    const { communityCards } = this.props;
    const communityCardList = communityCards?.map(communityCard => (
      <CommunityCard communityCard={communityCard} />
    ));
    return (
      <InfiniteScroll
        dataLength={communityCards.length}
        next={this.props.fetchMoreData}
        hasMore={true}
      >
        <div className="CommunityCardList">{communityCardList}</div>
      </InfiniteScroll>
    );
  }
}

export default CommunityCardList;
