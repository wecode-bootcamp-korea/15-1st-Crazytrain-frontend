import React, { Component } from "react";
import Category from "./Category/Category";
import "./Store.scss";

import Test from "./test";
class Store extends Component {
  render() {
    return (
      <>
        <div className="Store">
          <Category />
          <Test />
        </div>
      </>
    );
  }
}

export default Store;
