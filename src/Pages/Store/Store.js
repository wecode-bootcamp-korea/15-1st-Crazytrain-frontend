import React, { Component } from "react";
import Category from "./Category/Category";
import "./Store.scss";

class Store extends Component {
  render() {
    return (
      <>
        <nav>네비게이션 없으니 눈이 불편하구나....</nav>
        <div className="Store">
          <Category />
        </div>
      </>
    );
  }
}

export default Store;
