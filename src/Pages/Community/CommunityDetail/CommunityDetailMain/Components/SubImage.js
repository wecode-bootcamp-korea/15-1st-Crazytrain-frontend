import React, { Component } from "react";
import "./SubImage.scss";

class SubImage extends Component {
  render() {
    const {
      marker,
      index,
      toggleMouseEnter,
      toggleMouseLeave,
      isMouseOn,
    } = this.props;
    return (
      <li className="SubImage">
        <img
          className={`${isMouseOn ? "makeHighlight" : ""}`}
          onMouseEnter={() => toggleMouseEnter(index)}
          onMouseLeave={() => toggleMouseLeave(index)}
          src={marker.details.image}
          alt={marker.details.image}
        />
      </li>
    );
  }
}

export default SubImage;
