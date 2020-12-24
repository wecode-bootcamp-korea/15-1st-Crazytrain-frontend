import React, { Component } from "react";
import { FilterTapData } from "./FilterTapData";
import { withRouter } from "react-router-dom";
import FilterTapCard from "./FilterTapCard";
import FilterSelected from "./FilterSelected";
import "./FilterTap.scss";

class FilterTap extends Component {
  state = {
    selectedFilter: [],
  };

  makeQueryString = filterList => {
    return filterList.reduce(
      (acc, curr, idx) => acc + `&${curr.query}=${curr.id}`,
      ""
    );
  };

  addFilter = tap => {
    const newFilter = [...this.state.selectedFilter];
    let index = -1;
    for (let i = 0; i < newFilter.length; i++) {
      if (newFilter[i].tapId === tap.tapId) {
        index = i;
        break;
      }
    }
    if (index !== -1) newFilter.splice(index, 1); // 중복되는 필터는 삭제
    newFilter.push(tap);
    const query = this.makeQueryString(newFilter);
    this.setState(prev => ({
      selectedFilter: newFilter,
    }));
    this.props.history.push(`?${query}`);
  };

  deleteFilter = targetFilter => {
    const newFilter = [...this.state.selectedFilter];
    newFilter.splice(newFilter.indexOf(targetFilter), 1);
    const query = this.makeQueryString(newFilter);
    this.setState({
      selectedFilter: newFilter,
    });
    this.props.history.push(`?${query}`);
  };

  clearFilter = () => {
    this.setState({
      selectedFilter: [],
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <section className="FilterTap">
          {FilterTapData.map((element, index) => {
            const isSelected = this.state.selectedFilter
              .map(element => element.tapId)
              .includes(element.id);
            return (
              <FilterTapCard
                key={index}
                isSelected={isSelected}
                filterTapCard={element}
                addFilter={this.addFilter}
                selectedFilter={this.state.selectedFilter}
              />
            );
          })}
        </section>
        <FilterSelected
          selectedFilter={this.state.selectedFilter}
          clearFilter={this.clearFilter}
          deleteFilter={this.deleteFilter}
        />
      </>
    );
  }
}

export default withRouter(FilterTap);
