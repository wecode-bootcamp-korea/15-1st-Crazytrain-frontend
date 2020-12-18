import React, { Component } from "react";
import ProductItem from "../Component/ProductItem/ProductItem";
import "./ContentMdpick.scss";

class ContentMdpick extends Component {
  render() {
    return (
      <div className="ContentMdpick">
        <div className="mdpickTitle">#지금은 할인 중</div>
        <div className="mdpickItems">
          <ul className="itemsWrap">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </ul>
        </div>
      </div>
    );
  }
}

export default ContentMdpick;
