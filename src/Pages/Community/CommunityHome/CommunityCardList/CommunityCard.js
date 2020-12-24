import React from "react";
import { withRouter } from "react-router-dom";
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

  goToDetail = () => {
    this.props.history.push("/community");
  };

  render() {
    const {
      post_id,
      writer_nickname,
      profile_image,
      block,
    } = this.props.communityCard;
    const image = block[0].block_image;
    const content = block[0].block_content;

    const isProfileSelected = this.state.isProfileSelected ? "setVague" : "";
    const isMainImageSelected = this.state.isMainSelected ? "zoom" : "";
    const isMainContentSelected = this.state.isMainSelected ? "setVague" : "";
    const isCommentSelected = this.state.isCommentSelected ? "setVague" : "";
    return (
      // <></>
      <div className="CommunityCard" key={post_id}>
        <header>
          <img
            onMouseEnter={() => this.toggleSelected("isProfileSelected")}
            onMouseLeave={() => this.toggleSelected("isProfileSelected")}
            className={`addCursor ${isProfileSelected}`}
            alt="profileImage"
            src={profile_image}
          />
          <span
            onMouseEnter={() => this.toggleSelected("isProfileSelected")}
            onMouseLeave={() => this.toggleSelected("isProfileSelected")}
            className={`addCursor ${isProfileSelected}`}
          >{`${writer_nickname} · `}</span>
          <span className="addCursor follow">{"팔로우"}</span>
        </header>
        <div
          onClick={this.goToDetail}
          onMouseEnter={() => this.toggleSelected("isMainSelected")}
          onMouseLeave={() => this.toggleSelected("isMainSelected")}
          className="cardImage addCursor"
        >
          <img className={isMainImageSelected} alt="contentImage" src={image} />
          {/* <span>{`조회수 ${views.toLocaleString()}`}</span> */}
        </div>
        {/* <section className="icons">
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
        </section> */}
        <section className="icons">
          <div className="column addCursor">
            <img alt="heart" src="/images/community/heart.svg" />
            <span>573</span>
          </div>
          <div className="column addCursor">
            <img alt="bookmark" src="/images/community/bookmark.svg" />
            <span>14</span>
          </div>
          <div className="column addCursor">
            <img alt="comment" src="/images/community/comment.svg" />
            <span>1</span>
          </div>
        </section>
        <section
          onClick={this.goToDetail}
          onMouseEnter={() => this.toggleSelected("isMainSelected")}
          onMouseLeave={() => this.toggleSelected("isMainSelected")}
          className={`content addCursor ${isMainContentSelected}`}
        >
          {content}
        </section>
        {/* <section className="comments">
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
        </section> */}
        <section className="comments">
          <img
            className={`addCursor ${isCommentSelected}`}
            alt="commentProfilePic"
            onMouseEnter={() => this.toggleSelected("isCommentSelected")}
            onMouseLeave={() => this.toggleSelected("isCommentSelected")}
            src="/images/community/sampleImage3.jpg"
          />
          <span>
            <strong
              className={`addCursor ${isCommentSelected}`}
              onMouseEnter={() => this.toggleSelected("isCommentSelected")}
              onMouseLeave={() => this.toggleSelected("isCommentSelected")}
            >
              HTHStudy
            </strong>
            <span className="addCursor">
              포근하고 아늑한 느낌 정말 좋네요~~~^^
            </span>
          </span>
        </section>
      </div>
    );
  }
}

export default withRouter(CommunityCard);
