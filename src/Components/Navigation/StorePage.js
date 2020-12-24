import React, { Component } from "react";
import { withRouter } from "react-router-dom";

const store_List = [
  {
    id: 1,
    name: "스토어홈",
  },
  {
    id: 2,
    name: "카테고리",
  },
  {
    id: 3,
    name: "신혼가구",
  },
  {
    id: 4,
    name: "베스트",
  },
  {
    id: 5,
    name: "오늘의딜",
  },
];

class StorePage extends Component {
  render() {
    return (
      <div className="storeSubNav" onMouseLeave={this.props.toggleSubNav}>
        {store_List.map(element => (
          <div
            className="storeSubNavContent"
            onClick={() => this.props.history.push("/storemain")}
          >
            {element.name}
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(StorePage);
