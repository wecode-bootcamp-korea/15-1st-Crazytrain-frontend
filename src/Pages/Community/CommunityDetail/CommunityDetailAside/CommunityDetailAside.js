import React, { Component } from "react";
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
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
              </svg>
              {likeNum?.toLocaleString()}
            </div>
            <div>
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M14.467,1.771H5.533c-0.258,0-0.47,0.211-0.47,0.47v15.516c0,0.414,0.504,0.634,0.802,0.331L10,13.955l4.136,4.133c0.241,0.241,0.802,0.169,0.802-0.331V2.241C14.938,1.982,14.726,1.771,14.467,1.771 M13.997,16.621l-3.665-3.662c-0.186-0.186-0.479-0.186-0.664,0l-3.666,3.662V2.711h7.994V16.621z"></path>
              </svg>
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
