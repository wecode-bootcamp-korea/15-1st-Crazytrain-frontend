import React, { Component } from "react";
import ContentHeaderSwiper from "./ContentHeaderSwiper/ContentHeaderSwiper";
import "./ContentHeader.scss";

class ContentHeader extends Component {
  render() {
    const { selectCategory, clickValue } = this.props;

    return (
      <div className="ContentHeader">
        <div className="headerCategory">
          {`${selectCategory.category} > ${clickValue}`}
        </div>
        <ContentHeaderSwiper />
      </div>
    );
  }
}

export default ContentHeader;
