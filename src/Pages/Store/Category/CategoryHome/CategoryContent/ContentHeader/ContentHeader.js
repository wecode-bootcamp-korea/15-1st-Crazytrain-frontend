import React, { Component } from "react";
import ContentHeaderSwiper from "./ContentHeaderSwiper/ContentHeaderSwiper";
import "./ContentHeader.scss";

class ContentHeader extends Component {
  render() {
    return (
      <div className="ContentHeader">
        <div className="headerCategory">가구</div>
        <ContentHeaderSwiper />
      </div>
    );
  }
}

export default ContentHeader;
