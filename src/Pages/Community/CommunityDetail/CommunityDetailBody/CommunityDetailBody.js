import React, { Component } from "react";
import "./CommunityDetailBody.scss";

class CommunityDetailBody extends Component {
  state = {};

  render() {
    const { mainImage, markerList } = this.props.content;
    return (
      <section className="CommunityDetailBody">
        <div className="bodyMain">
          <img
            className="bodyMainImage"
            src={`${mainImage}`}
            alt={`${mainImage}`}
          />
          {markerList.map(marker => {
            return (
              <div
                onMouseEnter={this.toggleMarker}
                onMouseLeave={this.toggleMarker}
                style={{ left: marker.x, top: marker.y }}
                className={"marker addCursor"}
              >
                +
                <div className="bubbleWrapper">
                  <div className="bubble">
                    <div className="column">
                      <img
                        alt={marker.details.image}
                        src={marker.details.image}
                      />
                      <section>
                        <div>{marker.details.brandName}</div>
                        <div>{marker.details.name}</div>
                        <div>
                          {`${marker.details.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          원`}
                        </div>
                      </section>
                    </div>
                    <div className="column">여기는 화살표</div>
                  </div>
                </div>
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
