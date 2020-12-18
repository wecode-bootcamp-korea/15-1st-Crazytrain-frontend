import React from "react";
import "./CommunityCard.scss";

class CommunityCard extends React.Component {
  render() {
    const {
      id,
      userName,
      profileImage,
      image,
      content,
      comments,
      likes,
      bookmarks,
      views,
    } = this.props.communityCard;
    return (
      <div className="CommunityCard" key={id}>
        <header>
          <img className="addCursor" alt="profileImage" src={profileImage} />
          <span className="addCursor">{`${userName} · `}</span>
          <span className="addCursor follow">{"팔로우"}</span>
        </header>
        <div className="cardImage addCursor">
          <img alt="contentImage" src={image} />
          <span>{`조회수 ${views}`}</span>
        </div>
        <section className="icons">
          <div className="column addCursor">
            <img alt="heart" src="/images/community/heart.svg" />
            <span>{likes}</span>
          </div>
          <div className="column addCursor">
            <img alt="bookmark" src="/images/community/bookmark.svg" />
            <span>{bookmarks}</span>
          </div>
          <div className="column addCursor">
            <img alt="heart" src="/images/community/comment.svg" />
            <span>{comments.length}</span>
          </div>
        </section>
        <section className="content addCursor">{content}</section>
        <section className="comments">
          <img
            className="addCursor"
            alt="commentProfilePic"
            src={comments[0].profileImage}
          />
          <span>
            <strong className="addCursor">{comments[0].userName}</strong>
            <span className="addCursor">{comments[0].content}</span>
          </span>
        </section>
      </div>
    );
  }
}

export default CommunityCard;
