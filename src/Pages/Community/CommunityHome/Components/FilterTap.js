import React, { Component } from "react";
import { FilterTapData } from "./FilterTapData";
import FilterTapCard from "./FilterTapCard";
import "./FilterTap.scss";
import FilterSelected from "./FilterSelected";

class FilterTap extends Component {
  state = {
    selectedFilter: [],
  };

  addFilter = tap => {
    // let index = -1;
    // for (let element of this.state.selecetedFilter) {
    //   if (element.tapId === tap.tapId) {
    //     index = this.state.selectedFilter.indexOf(element);
    //   }
    // }
    // this.setState({
    //   selectedFilter: [...this.state.selectedFilter, tap.name],
    // });
  };

  render() {
    return (
      <>
        <section className="communityFilter">
          {FilterTapData.map((element, index) => {
            return (
              <FilterTapCard
                key={index}
                filterTapCard={element}
                addFilter={this.addFilter}
              />
            );
          })}
        </section>
        <FilterSelected selectedFilter={this.state.selectedFilter} />
      </>
    );
  }
}

export default FilterTap;
