import React, { Component } from "react";
import "./CategoryContent.scss";

class CategoryContent extends Component {
  render() {
    return (
      <div className="CategoryContent">
        <div className="ContentHeader"></div>
        <div className="ContentMdpick"></div>
        <div className="ContentFilter"></div>
        <div className="ContentRow"></div>
      </div>
    );
  }
}

export default CategoryContent;
