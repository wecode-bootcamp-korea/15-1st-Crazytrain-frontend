import React, { Component } from "react";
import { ReactComponent as MarkerIcon } from "./marker_icon.svg";
import "./Marker.scss";

class Marker extends Component {
  render() {
    const {
      index,
      marker,
      isMouseOn,
      toggleMouseEnter,
      toggleMouseLeave,
    } = this.props;
    return (
      <div
        onMouseEnter={() => toggleMouseEnter(index)}
        onMouseLeave={() => toggleMouseLeave(index)}
        style={{ left: marker.x, top: marker.y }}
        className={`Marker ${isMouseOn ? "makeVisible" : ""}`}
      >
        +
        <div className={`bubbleWrapper ${isMouseOn ? "makeVisible" : ""}`}>
          <div className="bubble">
            <div className="column">
              <img alt={marker.details.image} src={marker.details.image} />
              <section>
                <div>{marker.details.brandName}</div>
                <div>{marker.details.name}</div>
                <div>
                  {`${marker.details.price.toLocaleString()}
                원`}
                </div>
              </section>
            </div>
            <div className="column">
              <MarkerIcon />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Marker;
