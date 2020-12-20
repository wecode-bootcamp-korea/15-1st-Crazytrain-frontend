import React, { Component } from "react";
import "./CommunityDetailBody.scss";

class CommunityDetailBody extends Component {
  render() {
    const { mainImage, markerList } = this.props.content;
    return (
      <section className="CommunityDetailBody">
        <div className="bodyMainImage">
          <img
            className={"bodyMainImage"}
            src={`${mainImage}`}
            alt={`${mainImage}`}
          />
          {markerList.map(marker => {
            return (
              <div
                style={{ left: marker.x, top: marker.y }}
                className="marker addCursor"
              >
                +
              </div>
            );
          })}
        </div>
        <ul className="subImages">
          {markerList.map(marker => {
            return (
              <li>
                <img src={marker.details.image} alt={marker.details.image} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default CommunityDetailBody;
