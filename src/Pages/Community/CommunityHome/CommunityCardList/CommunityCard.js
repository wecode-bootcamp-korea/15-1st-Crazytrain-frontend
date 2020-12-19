import React from "react";
import "./CommunityCard.scss";

class CommunityCard extends React.Component {
  state = {
    isProfileSelected: false,
    isMainSelected: false,
    isCommentSelected: false,
  };

  toggleProfileSelected = () => {
    this.setState(prev => ({
      isProfileSelected: !prev.isProfileSelected,
    }));
  };

  toggleMainSelected = () => {
    this.setState(prev => ({
      isMainSelected: !prev.isMainSelected,
    }));
  };

  toggleCommentSelected = () => {
    this.setState(prev => ({
      isCommentSelected: !prev.isCommentSelected,
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
            onMouseEnter={this.toggleProfileSelected}
            onMouseLeave={this.toggleProfileSelected}
            className={`addCursor ${isProfileSelected}`}
            alt="profileImage"
            src={profileImage}
          />
          <span
            onMouseEnter={this.toggleProfileSelected}
            onMouseLeave={this.toggleProfileSelected}
            className={`addCursor ${isProfileSelected}`}
          >{`${userName} · `}</span>
          <span className="addCursor follow">{"팔로우"}</span>
        </header>
        <div
          onMouseEnter={this.toggleMainSelected}
          onMouseLeave={this.toggleMainSelected}
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
            <img alt="heart" src="/images/community/comment.svg" />
            <span>{comments.length}</span>
          </div>
        </section>
        <section
          onMouseEnter={this.toggleMainSelected}
          onMouseLeave={this.toggleMainSelected}
          className={`content addCursor ${isMainContentSelected}`}
        >
          {content}
        </section>
        <section className="comments">
          <img
            className={`addCursor ${isCommentSelected}`}
            alt="commentProfilePic"
            onMouseEnter={this.toggleCommentSelected}
            onMouseLeave={this.toggleCommentSelected}
            src={comments[0].profileImage}
          />
          <span>
            <strong
              className={`addCursor ${isCommentSelected}`}
              onMouseEnter={this.toggleCommentSelected}
              onMouseLeave={this.toggleCommentSelected}
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
