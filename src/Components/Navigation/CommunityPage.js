import React, { Component } from "react";

const community_List = [
  {
    id: 1,
    name: "홈",
  },
  {
    id: 2,
    name: "사진",
  },
  {
    id: 3,
    name: "집들이",
  },
  {
    id: 4,
    name: "노하우",
  },
  {
    id: 5,
    name: "전문가 집들이",
  },
  {
    id: 6,
    name: "셀프가이드",
  },
  {
    id: 7,
    name: "질문과답변",
  },
  {
    id: 8,
    name: "이벤트",
  },
];

class CommunityPage extends Component {
  render() {
    return (
      <div className="CommunitySubNav">
        {community_List.map((element, index) => (
          <div key={index} className="communitySubNavContent">
            {element.name}
          </div>
        ))}
      </div>
    );
  }
}

export default CommunityPage;
