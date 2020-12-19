import React from "react";
import "./CommunityCard.scss";

class CommunityCard extends React.Component {
  state = {
    isProfileSelected: false,
    isMainSelected: false,
    isCommentSelected: false,
  };

  toggleSelected = key => {
    this.setState(prev => ({
      [key]: !prev[key],
    }));
  };

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

    const isProfileSelected = this.state.isProfileSelected ? "setVague" : "";
    const isMainImageSelected = this.state.isMainSelected ? "zoom" : "";
    const isMainContentSelected = this.state.isMainSelected ? "setVague" : "";
    const isCommentSelected = this.state.isCommentSelected ? "setVague" : "";
    return (
      <div className="CommunityCard" key={id}>
        <header>
          <img
            onMouseEnter={() => this.toggleSelected("isProfileSelected")}
            onMouseLeave={() => this.toggleSelected("isProfileSelected")}
            className={`addCursor ${isProfileSelected}`}
            alt="profileImage"
            src={profileImage}
          />
          <span
            onMouseEnter={() => this.toggleSelected("isProfileSelected")}
            onMouseLeave={() => this.toggleSelected("isProfileSelected")}
            className={`addCursor ${isProfileSelected}`}
          >{`${userName} · `}</span>
          <span className="addCursor follow">{"팔로우"}</span>
        </header>
        <div
          onMouseEnter={() => this.toggleSelected("isMainSelected")}
          onMouseLeave={() => this.toggleSelected("isMainSelected")}
          className="cardImage addCursor"
        >
          <img className={isMainImageSelected} alt="contentImage" src={image} />
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
            <img alt="comment" src="/images/community/comment.svg" />
            <span>{comments.length}</span>
          </div>
        </section>
        <section
          onMouseEnter={() => this.toggleSelected("isMainSelected")}
          onMouseLeave={() => this.toggleSelected("isMainSelected")}
          className={`content addCursor ${isMainContentSelected}`}
        >
          {content}
        </section>
        <section className="comments">
          <img
            className={`addCursor ${isCommentSelected}`}
            alt="commentProfilePic"
            onMouseEnter={() => this.toggleSelected("isCommentSelected")}
            onMouseLeave={() => this.toggleSelected("isCommentSelected")}
            src={comments[0].profileImage}
          />
          <span>
            <strong
              className={`addCursor ${isCommentSelected}`}
              onMouseEnter={() => this.toggleSelected("isCommentSelected")}
              onMouseLeave={() => this.toggleSelected("isCommentSelected")}
            >
              {comments[0].userName}
            </strong>
            <span className="addCursor">{comments[0].content}</span>
          </span>
        </section>
      </div>
    );
  }
}

export default CommunityCard;
