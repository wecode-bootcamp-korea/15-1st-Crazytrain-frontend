import React from "react";
import { FilterTapData } from "./FilterTapData";
import "./FilterTap.scss";

class FilterTap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="communityFilter">
        {FilterTapData.map((element, index) => {
          return <div key={index}>{`${element} ↓`}</div>;
        })}
      </section>
    );
  }
}

export default FilterTap;
