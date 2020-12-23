import React, { Component } from "react";
import Category from "./Category/Category";
import "./Store.scss";

class Store extends Component {
  render() {
    return (
      <>
        <div className="Store">
          <Category />
        </div>
      </>
    );
  }
}

export default Store;
