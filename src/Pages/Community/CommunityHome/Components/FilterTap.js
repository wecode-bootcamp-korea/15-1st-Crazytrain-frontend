import React from "react";
import { FilterTapData } from "./FilterTapData";
import FilterTapCard from "./FilterTapCard";
import "./FilterTap.scss";

class FilterTap extends React.Component {
  render() {
    return (
      <section className="communityFilter">
        {FilterTapData.map((element, index) => {
          return <FilterTapCard key={index} filterTapCard={element} />;
        })}
      </section>
    );
  }
}

export default FilterTap;
