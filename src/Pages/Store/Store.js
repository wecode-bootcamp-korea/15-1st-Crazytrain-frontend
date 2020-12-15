import React from "react";
import Category from "./Category/Category";
import "./Store.scss";

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <nav></nav>
        <div className="Store">
          <Category />
        </div>
      </>
    );
  }
}

export default Store;
