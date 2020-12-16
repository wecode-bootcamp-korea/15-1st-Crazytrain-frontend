import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductItem.scss";

class ProductItem extends Component {
  render() {
    return (
      <article className="ProductItem">
        <Link to="#" className="itemOverlay">
          test
        </Link>
        <div className="itemImage"></div>
        <div className="itemContent"></div>
      </article>
    );
  }
}

export default ProductItem;
