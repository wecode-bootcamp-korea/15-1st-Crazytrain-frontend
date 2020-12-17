import React, { Component } from "react";
import ContentHeader from "./Component/ContentHeader/ContentHeader";
import ContentMdpick from "./Component/ContentMdpick/ContentMdpick";
import ContentFilter from "./Component/ContentFilter/ContentFilter";
import ContentRow from "./Component/ContentRow/ContentRow";
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
