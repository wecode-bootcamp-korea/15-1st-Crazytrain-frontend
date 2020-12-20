import React, { Component } from "react";
import "./CommunityDetail.scss";

class CommunityDetail extends Component {
  render() {
    return (
      <div className="CommunityDetail">
        <section className="mainMenu">
          <main>
            메인 피드
            <header>10평대 내추럴 스타일 원룸 & 오피스</header>
            <section>여기는 컴포넌트가 올 부분</section>
          </main>
          <aside>옆 메뉴</aside>
        </section>

        <section className="bottomMenu">사진 리스트</section>
      </div>
    );
  }
}

export default CommunityDetail;
