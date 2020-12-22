import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

const SMALL_IMAGES = [
  {
    src: "../images/store/smaple_desk2.webp",
    alt: "test1",
  },
  {
    src: "../images/store/smaple_desk2.webp",
    alt: "test2",
  },
  {
    src: "../images/store/smaple_desk2.webp",
    alt: "test3",
  },
  {
    src: "../images/store/smaple_desk2.webp",
    alt: "test4",
  },
  {
    src: "../images/store/smaple_desk2.webp",
    alt: "test5",
  },
  {
    src: "../images/store/smaple_desk2.webp",
    alt: "test6",
  },
];

class Product extends Component {
  render() {
    return (
      <>
        <nav>네비게이션 없으니 눈이 불편하구나....</nav>
        <div className="Product">
          <div className="overviewContainer">
            <div className="overviewCategory">
              {"가구 > 주방 > 홈바 / 아일랜드식탁"}
            </div>
            <div className="containerRow">
              <div className="rowLeft">
                <ul className="imageList">
                  {SMALL_IMAGES.map((image, index) => (
                    <li key={index} className="smallImage">
                      <img src={image.src} alt={image.alt} />
                    </li>
                  ))}
                </ul>
                <div className="bigImageWrap">
                  <img src="../images/store/sample_desk.webp" alt="test" />
                </div>
              </div>
              <div className="rowRight">
                <div className="rightHeader">
                  <div className="headerContiner">
                    <div className="brandName">{"장인가구"}</div>
                    <div clasName="productTitle">
                      {"[3%쿠폰] 더크림 드레스룸/옷장 3colors"}
                    </div>
                  </div>
                  <div className="headerContent">
                    <div className="headerAction">
                      <button className="actionButton">
                        <svg class="svg-icon" viewBox="0 0 24 24">
                          <path d="M14.467,1.771H5.533c-0.258,0-0.47,0.211-0.47,0.47v15.516c0,0.414,0.504,0.634,0.802,0.331L10,13.955l4.136,4.133c0.241,0.241,0.802,0.169,0.802-0.331V2.241C14.938,1.982,14.726,1.771,14.467,1.771 M13.997,16.621l-3.665-3.662c-0.186-0.186-0.479-0.186-0.664,0l-3.666,3.662V2.711h7.994V16.621z"></path>
                        </svg>
                        <span>{367}</span>
                      </button>
                      <button className="actionButton">
                        <svg class="svg-icon" viewBox="0 0 24 24">
                          <path d="M14.68,12.621c-0.9,0-1.702,0.43-2.216,1.09l-4.549-2.637c0.284-0.691,0.284-1.457,0-2.146l4.549-2.638c0.514,0.661,1.315,1.09,2.216,1.09c1.549,0,2.809-1.26,2.809-2.808c0-1.548-1.26-2.809-2.809-2.809c-1.548,0-2.808,1.26-2.808,2.809c0,0.38,0.076,0.741,0.214,1.073l-4.55,2.638c-0.515-0.661-1.316-1.09-2.217-1.09c-1.548,0-2.808,1.26-2.808,2.809s1.26,2.808,2.808,2.808c0.9,0,1.702-0.43,2.217-1.09l4.55,2.637c-0.138,0.332-0.214,0.693-0.214,1.074c0,1.549,1.26,2.809,2.808,2.809c1.549,0,2.809-1.26,2.809-2.809S16.229,12.621,14.68,12.621M14.68,2.512c1.136,0,2.06,0.923,2.06,2.06S15.815,6.63,14.68,6.63s-2.059-0.923-2.059-2.059S13.544,2.512,14.68,2.512M5.319,12.061c-1.136,0-2.06-0.924-2.06-2.06s0.923-2.059,2.06-2.059c1.135,0,2.06,0.923,2.06,2.059S6.454,12.061,5.319,12.061M14.68,17.488c-1.136,0-2.059-0.922-2.059-2.059s0.923-2.061,2.059-2.061s2.06,0.924,2.06,2.061S15.815,17.488,14.68,17.488"></path>
                        </svg>
                        <span>{38}</span>
                      </button>
                    </div>
                    <div className="headerReview">
                      <Link href="#">
                        <span className="reviewIcon">별모양 아이콘들</span>
                        <span className="reviewText">{222}개 리뷰</span>
                      </Link>
                    </div>
                    <div className="headerPrice">
                      <span className="priceDiscount">
                        <span className="number">{41}</span>
                        <span className="percent">%</span>
                      </span>
                      <span className="pricePrice">
                        <span className="number">{138000}</span>
                        <span className="won">원</span>
                        <span className="won">외</span>
                        <span className="itemBadge">특가</span>
                      </span>
                    </div>
                    <div className="headerCoupon">
                      <button class="couponButton" type="button">
                        <svg
                          class="icon"
                          aria-label="다운로드"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path d="M19 9l-7 7-7-7h4V3h6v6h4zM5 18h14v2H5v-2z"></path>
                        </svg>
                        쿠폰받기
                      </button>
                    </div>
                  </div>
                </div>
                <div className="optionForm"></div>
                <div className="promotionBanner"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
