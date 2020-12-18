import React, { Component } from "react";

const storeList = [
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
      <>
        <div className="storeSubNav" onMouseLeave={this.props.toggleSubNav}>
          {storeList.map(element => (
            <div className="storeSubNavContent">{element.name}</div>
          ))}
        </div>
      </>
    );
  }
}

export default StorePage;
