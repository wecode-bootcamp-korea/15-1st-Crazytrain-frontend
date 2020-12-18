import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductItem.scss";

class ProductItem extends Component {
  render() {
    return (
      <article className="ProductItem">
        <Link to="#" className="itemOverlay" />
        <img
          src="./images/store/table.jpg"
          alt="gaming_chair"
          className="itemImage"
        />
        <div className="itemContent">
          <div className="itemBrandName">크라운퍼니처</div>
          <div className="itemTitle">
            [주말특가][쿠폰할인] 신상출시 헤링본 아일랜드 식탁 테이블 3size
            (렌지대/수납형)
          </div>
          <div className="itemPrice">
            <span className="itemPriceRate">42%</span>
            <span className="itemPricePrice">98,000 원</span>
          </div>
          <div className="itemStat">
            <svg class="statStar" width="12" height="12" viewBox="0 0 24 24">
              <path
                fill="#35c5f0"
                d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"
              ></path>
            </svg>
            <strong className="statStarCount">4.9</strong>
            <span className="statReview">리뷰 1,133</span>
            <div className="itemBadge">특가</div>
          </div>
        </div>
      </article>
    );
  }
}

export default ProductItem;
