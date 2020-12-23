import React, { Component } from "react";
import Marker from "./Marker";
import SubImage from "./SubImage";
import "./DetailBody.scss";

class DetailBody extends Component {
  state = {};

  toggleMouseEnter = index => {
    this.setState({ [`isMouseOn${index}`]: true });
  };

  toggleMouseLeave = index => {
    this.setState({ [`isMouseOn${index}`]: false });
  };

  render() {
    const { mainImage, markerList, contents } = this.props.content;
    return (
      <section className="CommunityDetailBody">
        <div className="bodyMain">
          <img
            className="bodyMainImage"
            src={`${mainImage}`}
            alt={`${mainImage}`}
          />
          {markerList.map((marker, index) => {
            return (
              <Marker
                key={index}
                index={index}
                marker={marker}
                toggleMouseEnter={this.toggleMouseEnter}
                toggleMouseLeave={this.toggleMouseLeave}
                isMouseOn={this.state[`isMouseOn${index}`]}
              />
            );
          })}
        </div>
        <ul className="subImages">
          {markerList.map((marker, index) => {
            return (
              <SubImage
                key={index}
                index={index}
                marker={marker}
                toggleMouseEnter={this.toggleMouseEnter}
                toggleMouseLeave={this.toggleMouseLeave}
                isMouseOn={this.state[`isMouseOn${index}`]}
              />
            );
          })}
        </ul>
        <p>{contents}</p>
      </section>
    );
  }
}
export default DetailBody;
