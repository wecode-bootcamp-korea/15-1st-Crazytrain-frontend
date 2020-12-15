import React from "react";
import CommunityCard from "./CommunityCard";
import "./CommunityCardList.scss";

class CommunityCardList extends React.Component {
  render() {
    const { communityCards } = this.props;
    return (
      <div className="CommunityCardGrid">
        {communityCards &&
          communityCards.map(
            ({
              id,
              userName,
              profileImage,
              image,
              content,
              comments,
              likes,
              bookmarks,
              views,
            }) => {
              return (
                <CommunityCard
                  id={id}
                  userName={userName}
                  profileImage={profileImage}
                  image={image}
                  content={content}
                  comments={comments}
                  likes={likes}
                  bookmarks={bookmarks}
                  views={views}
                />
              );
            }
          )}
      </div>
    );
  }
}

export default CommunityCardList;
