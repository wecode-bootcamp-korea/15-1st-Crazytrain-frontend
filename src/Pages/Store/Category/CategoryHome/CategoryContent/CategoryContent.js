import React, { Component } from "react";
import ContentHeader from "./ContentHeader/ContentHeader";
import ContentMdpick from "./ContentMdpick/ContentMdpick";
import ContentFilter from "./ContentFilter/ContentFilter";
import ContentRow from "./ContentRow/ContentRow";
import "./CategoryContent.scss";

class CategoryContent extends Component {
  render() {
    const { clickValue, selectCategory } = this.props;
    return (
      <div className="CategoryContent">
        <ContentHeader
          clickValue={clickValue}
          selectCategory={selectCategory}
        />
        <ContentMdpick />
        <ContentFilter />
        <ContentRow clickValue={clickValue} />
      </div>
    );
  }
}

export default CategoryContent;
