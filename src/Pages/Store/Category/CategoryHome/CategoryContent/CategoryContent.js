import React, { Component } from "react";
import ContentHeader from "./ContentHeader/ContentHeader";
import ContentMdpick from "./ContentMdpick/ContentMdpick";
import ContentFilter from "./ContentFilter/ContentFilter";
import ContentRow from "./ContentRow/ContentRow";
import "./CategoryContent.scss";

class CategoryContent extends Component {
  render() {
    return (
      <div className="CategoryContent">
        <ContentHeader />
        <ContentMdpick />
        <ContentFilter />
        <ContentRow />
      </div>
    );
  }
}

export default CategoryContent;
