import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SalesArticle.scss";

class SalesArticle extends Component {
  render() {
    const { article, type } = this.props;

    return (
      <article className="SalesArticle">
        <Link to="/store/product">
          <div className="itemOverlay">
            <div className="imageWrap">
              <img className={type} src={article.src} alt={article.alt} />
            </div>
            <div className={`itemContent ${type}`}>
              <div className="itemBrandName">{article.brandName}</div>
              <div className="itemTitle">{article.articleName}</div>
              <div className="itemPrice">
                <span className="itemPriceRate">{article.itemPriceRate}%</span>
                <span className="itemPricePrice">
                  {article.itemPricePrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  {article.isPackage ? "외" : "원"}
                </span>
              </div>
              <div className="itemStat">
                <svg
                  className="statStar"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#35c5f0"
                    d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"
                  ></path>
                </svg>
                <strong className="statStarCount">
                  {article.statStarCount}
                </strong>
                <span className="statReview">
                  리뷰 {article.statReviewCount}
                </span>
                {article.itemBadge && (
                  <div className="itemBadge">{article.itemBadge}</div>
                )}
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }
}

export default SalesArticle;
