import React, { Component } from "react";
import { ReactComponent as HeartIcon } from "./heart_icon.svg";
import { ReactComponent as BookmarkIcon } from "./bookmark_icon.svg";
import "./CommunityDetailAside.scss";

class CommunityDetailAside extends Component {
  state = {};
  render() {
    const {
      likeNum,
      bookmarkNum,
      writerName,
      writerProfileImage,
      otherFeeds,
    } = this.props;
    return (
      <aside className="CommunityDetailAside">
        <section className="fixedContainer">
          <div className="buttonContainer">
            <div>
              <HeartIcon />
              {likeNum?.toLocaleString()}
            </div>
            <div>
              <BookmarkIcon />
              {bookmarkNum?.toLocaleString()}
            </div>
          </div>
          <header className="writerInfo">
            <div>
              <img
                src={writerProfileImage}
                alt={"iuisthecuttestindaworldnodoubtboutthat"}
              />
              <span>{writerName}</span>
            </div>
            <div>팔로우</div>
          </header>
          <section className="otherFeeds">
            {otherFeeds?.slice(0, 4).map(feed => {
              return (
                <div key={feed.id}>
                  <img src={`${feed.feedImage}`} alt="otherfeeds" />
                </div>
              );
            })}
          </section>
          <footer>
            {ICONS.map((icon, index) => (
              <img alt="haha" key={index} src={`${icon}`} />
            ))}
          </footer>
        </section>
      </aside>
    );
  }
}

const ICONS = [
  "/images/community/community_detail/fb_icon.png",
  "/images/community/community_detail/kakaotalk_icon.png",
  "/images/community/community_detail/kakao_icon.png",
  "/images/community/community_detail/blog_icon.png",
  "/images/community/community_detail/google_icon.png",
];

export default CommunityDetailAside;
