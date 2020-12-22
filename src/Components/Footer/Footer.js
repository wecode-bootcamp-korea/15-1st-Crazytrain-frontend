import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="Footer">
        <main>
          <header className="footerHeader">
            <div>
              고객센터
              <svg class="svg-icon" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
                ></path>
              </svg>
            </div>
            <div>1670-1234</div>
            <div>평일 09:00 ~ 18:00 (주말 & 공휴일 제외)</div>
          </header>
          <section>
            {HARD_CODING_DATA.FOOTER_LINKS.map(link => {
              return <span key={link}>{link}</span>;
            })}
          </section>
          <section>
            <div>
              {HARD_CODING_DATA.FOOTER_LINKS_TWO.map(({ name, content }) => {
                return <span key={content}>{`${name} : ${content}`}</span>;
              })}
            </div>
            <div>
              NICEPAY 안전거래 서비스고객님의 안전거래를 위해 현금 결제 시, 저희
              사이트에서 가입한 구매안전 서비스를 이용할 수 있습니다.
              <span>가입 확인</span>
            </div>
            <div>
              (주)버킷플레이스는 통신판매중개자로서 통신판매의 당사자가 아니며,
              입점업체가 등록한 상품, 상품정보 및 거래에 대하여
              (주)버킷플레이스는 일체 책임을 지지 않습니다.
            </div>
          </section>
          <footer>
            Copyright © 2014 - 2020 by Raginghousetoday, Inc. All rights
            reserved
          </footer>
        </main>
      </footer>
    );
  }
}

const HARD_CODING_DATA = {
  FOOTER_LINKS: [
    "브랜드 스토리",
    "회사소개",
    "채용정보",
    "이용약관",
    "개인정보처리방침",
    "공지사항",
    "고객센터",
    "고객의 소리",
    "전문가 등록",
    "사업자 구매회원",
    "제휴/광고 문의",
    "입점신청 문의",
  ],
  FOOTER_LINKS_TWO: [
    {
      name: "상호명",
      content: "(주)오늘WE집",
    },
    { name: "이메일", content: "(고객문의) cs@raginghousetoday.net" },
    { name: "대표이사", content: "석석주" },
    { name: "사업자등록번호", content: "119-86-12345" },
    { name: "통신판매업신고번호", content: "제2018-울산폭주기관차-0580호" },
    {
      name: "주소",
      content: "서울 서초구 서초대로1234길 4 오늘위집선릉타워 123층",
    },
  ],
};

export default Footer;
