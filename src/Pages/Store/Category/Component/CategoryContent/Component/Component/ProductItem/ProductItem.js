import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductItem.scss";

class ProductItem extends Component {
  render() {
    return (
      <article className="ProductItem">
        <Link to="#" className="itemOverlay" />
        <img
          src="./images/store/gaming_chair.jpg"
          alt="gaming_chair"
          className="itemImage"
        />
        <div className="itemContent">test</div>
      </article>
    );
  }
}

export default ProductItem;
