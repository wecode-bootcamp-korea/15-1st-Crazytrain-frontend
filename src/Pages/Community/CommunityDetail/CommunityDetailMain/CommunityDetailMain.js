import React, { Component } from "react";
import DetailBody from "./Components/DetailBody";
import Comment from "./Components/Comment";
import "./CommunityDetailMain.scss";

class CommunityDetailMain extends Component {
  render() {
    const { categories, contents, comments } = this.props;
    return (
      <main className="CommunityDetailMain">
        <header className="mainHeader">
          {categories?.map((category, index) => {
            return (
              <span
                key={index}
                className={index === categories.length - 1 ? "noBorder" : ""}
              >
                {category.name}
              </span>
            );
          })}
        </header>
        {contents?.map((content, index) => {
          return <DetailBody key={index} content={content} />;
        })}
        <Comment addComment={this.props.addComment} comments={comments} />
      </main>
    );
  }
}

export default CommunityDetailMain;
