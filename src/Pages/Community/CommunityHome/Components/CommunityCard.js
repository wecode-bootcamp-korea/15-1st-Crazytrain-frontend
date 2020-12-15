import React from "react";
import "./CommunityCard.scss";

class CommunityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseOnProfile: false,
      isMouseOnComment: false,
      isMouseOnImage: false,
    };
  }

  toggleProfileVague = () => {
    this.setState({
      isMouseOnProfile: !this.state.isMouseOnProfile,
    });
  };

  toggleImageVague = () => {
    this.setState({
      isMouseOnImage: !this.state.isMouseOnImage,
    });
  };

  toggleCommentVague = () => {
    console.log("comment");
    this.setState({
      isMouseOnComment: !this.state.isMouseOnComment,
    });
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
    } = this.props;
    return (
      <div className="CommunityCard" key={id}>
        <header>
          <img
            onMouseEnter={this.toggleProfileVague}
            onMouseLeave={this.toggleProfileVague}
            className={`addCursor ${
              this.state.isMouseOnProfile ? "setVague" : ""
            }`}
            alt="profileImage"
            src={profileImage}
          />
          <span
            onMouseEnter={this.toggleProfileVague}
            onMouseLeave={this.toggleProfileVague}
            className={`addCursor ${
              this.state.isMouseOnProfile ? "setVague" : ""
            }`}
          >{`${userName} · `}</span>
          <span className="addCursor follow">{"팔로우"}</span>
        </header>
        <div
          className="cardImage addCursor"
          onMouseEnter={this.toggleImageVague}
          onMouseLeave={this.toggleImageVague}
        >
          <img
            className={`${this.state.isMouseOnImage ? "zoom" : ""}`}
            alt="contentImage"
            src={image}
          />
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
          className={`content addCursor ${
            this.state.isMouseOnImage ? "setVague" : ""
          }`}
          onMouseEnter={this.toggleImageVague}
          onMouseLeave={this.toggleImageVague}
        >
          {content}
        </section>
        <section className="comments">
          <img
            onMouseEnter={this.toggleCommentVague}
            onMouseLeave={this.toggleCommentVague}
            className={`addCursor ${
              this.state.isMouseOnComment ? "setVague" : ""
            }`}
            alt="commentProfilePic"
            src={comments[0].profileImage}
          />
          <span>
            <strong
              onMouseEnter={this.toggleCommentVague}
              onMouseLeave={this.toggleCommentVague}
              className={`addCursor ${
                this.state.isMouseOnComment ? "setVague" : ""
              }`}
            >
              {comments[0].userName}
            </strong>
            {comments[0].content}
          </span>
        </section>
      </div>
    );
  }
}

export default CommunityCard;
