import React from "react";
import CommunityCard from "./CommunityCard";
import "./CommunityCardList.scss";

class CommunityCardList extends React.Component {
  render() {
    const { communityCards } = this.props;
    return (
      <div className="CommunityCardList">
        {communityCards?.map(communityCard => (
          <CommunityCard key={communityCard.id} communityCard={communityCard} />
        ))}
      </div>
    );
  }
}

export default CommunityCardList;
