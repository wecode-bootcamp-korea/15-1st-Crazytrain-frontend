import React, { Component } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import Category from "./Category/Category";
import "./Store.scss";

class Store extends Component {
  render() {
    return (
      <>
        <Navigation />
        <div className="Store">
          <Category />
        </div>
        <Footer />
      </>
    );
  }
}

export default Store;
