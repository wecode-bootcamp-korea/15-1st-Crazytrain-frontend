import React from "react";
import CommunityCard from "./CommunityCard";
import "./CommunityCardList.scss";

class CommunityCardList extends React.Component {
  render() {
    const { communityCards } = this.props;
    return (
      <div className="CommunityCardGrid">
        {communityCards &&
          communityCards.map(communityCard => (
            <CommunityCard communityCard={communityCard} />
          ))}
      </div>
    );
  }
}

export default CommunityCardList;
