import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CommunityCard from "./CommunityCard";
import "./CommunityCardList.scss";

class CommunityCardList extends React.Component {
  render() {
    const { communityCards } = this.props;
    return (
      <InfiniteScroll
        dataLength={communityCards.length}
        next={this.props.fetchMoreData}
        hasMore={true}
      >
        <div className="CommunityCardList">
          {communityCards?.map(communityCard => (
            <CommunityCard
              key={communityCard.id}
              communityCard={communityCard}
            />
          ))}
        </div>
      </InfiniteScroll>
    );
  }
}

export default CommunityCardList;
