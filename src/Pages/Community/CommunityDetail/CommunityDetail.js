import React, { Component } from "react";
import CommunityDetailMain from "./CommunityDetailMain/CommunityDetailMain";
import CommunityDetailAside from "./CommunityDetailAside/CommunityDetailAside";
import { API } from "../../../config";
import "./CommunityDetail.scss";

class CommunityDetail extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch(`${API}/data/community/community_detail.json`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posts: res.community_detail,
        });
      });
  }

  addComment = value => {
    const newPost = { ...this.state.posts };
    const newComment = {
      id: newPost.comments[newPost.comments.length - 1].id + 1,
      userId: "tonyk0901",
      userProfileImage:
        "/images/community/community_detail/detail_profileSample1.png",
      comment: value,
    };
    newPost.comments = newPost.comments.concat(newComment);
    this.setState({
      posts: newPost,
    });
  };
  render() {
    const {
      categories,
      contents,
      comments,
      likeNum,
      bookmarkNum,
      writerName,
      writerProfileImage,
      otherFeeds,
    } = this.state.posts;

    return (
      <div className="CommunityDetail">
        <div className="CommunityDetailWrapper">
          <CommunityDetailMain
            addComment={this.addComment}
            categories={categories}
            contents={contents}
            comments={comments}
          />
          <CommunityDetailAside
            likeNum={likeNum}
            bookmarkNum={bookmarkNum}
            writerName={writerName}
            writerProfileImage={writerProfileImage}
            otherFeeds={otherFeeds}
          />
        </div>

        <footer className="CommunityFooter">Footer here!</footer>
      </div>
    );
  }
}

export default CommunityDetail;
