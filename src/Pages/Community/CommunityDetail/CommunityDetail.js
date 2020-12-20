import React, { Component } from "react";
import CommunityDetailBody from "./CommunityDetailBody/CommunityDetailBody";
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
  render() {
    const { categories, contents } = this.state.posts;
    console.log(categories, contents);

    return (
      <div className="CommunityDetail">
        <main>
          <header>
            {categories?.map((category, index) => {
              return (
                <span
                  className={index === categories.length - 1 ? "noBorder" : ""}
                >
                  {category.name}
                </span>
              );
            })}
          </header>
          {contents?.map(content => {
            return <CommunityDetailBody content={content} />;
          })}
        </main>
        <aside className="asideMenu">옆 메뉴가 온다요</aside>
      </div>
    );
  }
}

export default CommunityDetail;
