import React, { Component } from "react";

class FilterSelected extends Component {
  render() {
    return (
      <div>
        {this.props.selectedFilter.map(element => {
          return <div>{element.name}</div>;
        })}
      </div>
    );
  }
}

export default FilterSelected;
