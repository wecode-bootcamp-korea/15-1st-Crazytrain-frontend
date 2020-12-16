import React from "react";
import "./FilterTapCard.scss";

class FilterTapCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { id, name, subTap } = this.props.filterTapCard;
    return (
      <>
        <div className="FilterCard">
          <div className="filter addCursor" key={id}>
            {`${name}`}
            <svg width="12" height="12">
              <path d="M6.07 7.56l4.39-4.55.87.87-5.25 5.45L.67 3.9 1.53 3z"></path>
            </svg>
          </div>
          <span className="filterCardWrapper">
            <div className="filterSub">
              {subTap.map(tap => {
                return <div className="subName">{tap.name}</div>;
              })}
            </div>
          </span>
        </div>
      </>
    );
  }
}

export default FilterTapCard;
