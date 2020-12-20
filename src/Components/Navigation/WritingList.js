import React, { Component } from "react";
import { withRouter } from "react-router-dom";

const writingBoxContent = [
  {
    img: "/images/navigation/bull.png",
    id: "사진 올리기",
    explain: "우리집 사진을 공유해보세요.",
  },
  {
    img: "/images/navigation/cheetah.png",
    id: "집들이 글쓰기",
    explain: "집에 관한 이야기를 글로 작성해보세요.",
  },
  {
    img: "/images/navigation/deer.png",
    id: "영상집들이 글쓰기",
    explain: "집에 관한 이야기를 영상으로 작성해보세요.",
  },
  {
    img: "/images/navigation/hippopo.png",
    id: "노하우 글쓰기",
    explain: "다양한 인테리어 노하우를 공유해주세요.",
  },
  {
    img: "/images/navigation/lion.png",
    id: "상품 리뷰 쓰기",
    explain: "상품 리뷰를 작성하고 포인트도 받아보세요.",
  },
  {
    img: "/images/navigation/monkey.png",
    id: "시공 전문가 리뷰쓰기",
    explain: "시공 전문가 리뷰를 작성하고 포인트도 받아보세요.",
  },
  {
    img: "/images/navigation/rhino.png",
    id: "인테리어 질문하기",
    explain: "인테리어 고수들과 전문가들에게 질문해보세요.",
  },
  {
    img: "/images/navigation/wild.png",
    id: "고객센터",
    explain: "궁금하신 사항을 남겨주시면 빠르게 안내해드릴게요.",
  },
];

class WritingList extends Component {
  goToUploadImg = index => {
    this.props.history.push(`/UploadImg/${index}`);
    console.log(this.props.history);
  };
  render() {
    return (
      <div className="writingBox">
        <div className="boxElement">
          {writingBoxContent.map((element, index) => (
            <div
              className="writingListMap"
              onClick={() => this.goToUploadImg(index)}
            >
              <div className="writingListImg">
                <img className="imgWriteList" src={element.img} alt="#" />
              </div>
              <div className="writingBoxWord">
                <div className="writingListTitle">{element.id}</div>
                <div className="writingListSubTitle">{element.explain}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(WritingList);
