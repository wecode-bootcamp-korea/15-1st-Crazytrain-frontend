import React, { Component } from "react";
import "./FilterTag.scss";

class FilterTag extends Component {
  render() {
    return (
      <li className="FilterTag">
        <div
          className="tagButton"
          onClick={() => {
            this.props.removeTag(this.props.tag);
          }}
        >
          {this.props.tag.text}
          <button className="removeButton">X</button>
        </div>
      </li>
    );
  }
}

export default FilterTag;
