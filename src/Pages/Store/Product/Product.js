import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API } from "../../../config";
import "./Product.scss";

const NAV_CATEGORIES = ["상품정보", "리뷰", "문의", "배송/환불", "추천"];

class Product extends Component {
  state = {
    clicked: false,
    productDetail: {},
  };

  componentDidMount() {
    // fetch("http://10.168.2.99:8000/products/2")
    fetch(`${API}/data/store/products3.json`)
      .then(response => response.json())
      .then(result => {
        this.setState({
          productDetail: result.productdetail[0],
        });
      });
  }

  addCart = () => {
    console.log(123);
    fetch("http://10.168.2.99:8000/shopping/cart", {
      method: "POST",
      headers: {
        // Authorization: localStorage.getItem("token"),
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.NwpC8Kujp2xApfX0n-OLf34ouXyZjAU0b3bBoH86itY",
      },
      body: JSON.stringify({
        product_id: this.state.productDetail.id,
        quantity: 1,
        color_id: this.state.productDetail.options[0].color_id,
        option_id: this.state.productDetail.options[0].option_id,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  };

  render() {
    const { productDetail } = this.state;
    console.log(productDetail);

    return (
      <>
        <div className="Product">
          <div>
            <div className="overviewContainer">
              <div className="overviewCategory">
                {`${productDetail.category} > ${productDetail.sub_category}`}
              </div>
              <div className="containerRow">
                <div className="rowLeft">
                  <ul className="imageList">
                    <li className="smallImage">
                      {productDetail.product_image?.map((image, index) => (
                        <img key={index} src={image} alt={productDetail.alt} />
                      ))}
                    </li>
                  </ul>
                  <div className="bigImageWrap">
                    {productDetail.product_image?.map((image, index) => (
                      <img key={index} src={image} alt={productDetail.alt} />
                    ))}
                  </div>
                </div>
                <div className="rowRight">
                  <div className="rightHeader">
                    <div className="headerContainer">
                      <div className="brandName">{productDetail.brandName}</div>
                      <div className="productTitle">
                        {productDetail.articleName}
                      </div>
                    </div>
                    <div className="headerContent">
                      <div className="headerAction">
                        <button className="actionButton">
                          <svg className="svg-icon" viewBox="0 0 24 24">
                            <path d="M14.467,1.771H5.533c-0.258,0-0.47,0.211-0.47,0.47v15.516c0,0.414,0.504,0.634,0.802,0.331L10,13.955l4.136,4.133c0.241,0.241,0.802,0.169,0.802-0.331V2.241C14.938,1.982,14.726,1.771,14.467,1.771 M13.997,16.621l-3.665-3.662c-0.186-0.186-0.479-0.186-0.664,0l-3.666,3.662V2.711h7.994V16.621z"></path>
                          </svg>
                          <span>{367}</span>
                        </button>
                        <button className="actionButton">
                          <svg className="svg-icon" viewBox="0 0 24 24">
                            <path d="M14.68,12.621c-0.9,0-1.702,0.43-2.216,1.09l-4.549-2.637c0.284-0.691,0.284-1.457,0-2.146l4.549-2.638c0.514,0.661,1.315,1.09,2.216,1.09c1.549,0,2.809-1.26,2.809-2.808c0-1.548-1.26-2.809-2.809-2.809c-1.548,0-2.808,1.26-2.808,2.809c0,0.38,0.076,0.741,0.214,1.073l-4.55,2.638c-0.515-0.661-1.316-1.09-2.217-1.09c-1.548,0-2.808,1.26-2.808,2.809s1.26,2.808,2.808,2.808c0.9,0,1.702-0.43,2.217-1.09l4.55,2.637c-0.138,0.332-0.214,0.693-0.214,1.074c0,1.549,1.26,2.809,2.808,2.809c1.549,0,2.809-1.26,2.809-2.809S16.229,12.621,14.68,12.621M14.68,2.512c1.136,0,2.06,0.923,2.06,2.06S15.815,6.63,14.68,6.63s-2.059-0.923-2.059-2.059S13.544,2.512,14.68,2.512M5.319,12.061c-1.136,0-2.06-0.924-2.06-2.06s0.923-2.059,2.06-2.059c1.135,0,2.06,0.923,2.06,2.059S6.454,12.061,5.319,12.061M14.68,17.488c-1.136,0-2.059-0.922-2.059-2.059s0.923-2.061,2.059-2.061s2.06,0.924,2.06,2.061S15.815,17.488,14.68,17.488"></path>
                          </svg>
                          <span>{38}</span>
                        </button>
                      </div>
                      <div className="headerReview">
                        <Link to="#">
                          <span className="reviewIcon">별모양 아이콘들</span>
                          <span className="reviewCount">{222}</span>
                          <span className="reviewText">개 리뷰</span>
                        </Link>
                      </div>
                      <div className="headerPrice">
                        <span className="priceDiscount">
                          <span className="number">{30}</span>
                          <span className="percent">%</span>
                        </span>
                        <span className="pricePrice">
                          <span className="number">
                            {productDetail.options &&
                              productDetail.options[0].price.toLocaleString()}
                          </span>
                          {productDetail.isPackage === "true" ? (
                            <span className="won">외</span>
                          ) : (
                            <span className="won">원</span>
                          )}
                          <span className="itemBadge">특가</span>
                        </span>
                      </div>
                      <div className="headerCoupon">
                        <button className="couponButton" type="button">
                          <svg
                            className="icon"
                            aria-label="다운로드"
                            width="24px"
                            height="24px"
                            fill="#34C5F0"
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <path d="M19 9l-7 7-7-7h4V3h6v6h4zM5 18h14v2H5v-2z"></path>
                          </svg>
                          <span>쿠폰받기</span>
                        </button>
                      </div>
                    </div>
                    <div className="headerDelivery">
                      <div className="deliveryType">
                        <span>업체직접배송 |</span>
                        <span> 15일 이내 배송</span>
                      </div>
                      <div className="deliveryFee">
                        <button>무료배송</button>
                      </div>
                      <div className="deliveryDisclaimerWrap">
                        <div className="disclaimer">
                          · 일부 상품은 예외가 있을 수 있습니다 (개별 상품정보
                          창고)
                        </div>
                        <div className="disclaimer">
                          · 조건에 따라 추가비용 발생 가능 (상품 상세 정보 참고)
                        </div>
                        <div className="disclaimer">
                          · 제주도/도서산간 지역 배송 불가
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to="#" className="sellerSimple">
                    <svg
                      className="icon"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path d="M16.67 3.33H3.33V5h13.34V3.33zm.83 8.34V10l-.83-4.17H3.33L2.5 10v1.67h.83v5h8.34v-5H15v5h1.67v-5h.83zM10 15H5v-3.33h5V15z"></path>
                    </svg>
                    <div className="simpleText">
                      {productDetail.brandName}브랜드홈
                    </div>
                  </Link>
                  <div className="optionForm">
                    <div className="sellingOption">
                      <button className="selectButton">
                        <div className="buttonProduction">
                          <select className="text">
                            {productDetail.options?.map((opt, index) => (
                              <option key={index}>
                                {opt.color}
                                {opt.price}
                              </option>
                            ))}
                          </select>
                          <svg width="1em" height="1em" viewBox="0 0 15 15">
                            <path
                              fill="currentColor"
                              d="M2.87 4L1.33 5.5 8 12l6.67-6.5L13.13 4 8 9z"
                            ></path>
                          </svg>
                        </div>
                      </button>
                      <div className="optionPrice">
                        <div className="priceLeft">주문금액</div>
                        <div className="priceRight">{0}원</div>
                      </div>
                    </div>
                    <div className="optionFooter">
                      <button className="button left" onClick={this.addCart}>
                        장바구니
                      </button>
                      <button className="button right">바로구매</button>
                    </div>
                  </div>
                  <div className="promotionBanner">
                    <img
                      alt="tt"
                      src="https://image.ohou.se/i/bucketplace-v2-development/uploads/admins/production_promotions/event/160836071409206977.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="productNav">
              <ol>
                {NAV_CATEGORIES.map((category, index) => (
                  <li className="productNavCategory clicked" key={index}>
                    <Link to="#">{category}</Link>
                  </li>
                ))}
              </ol>
            </div>

            {/* <div className="productMain"></div> */}
            <img src={productDetail.infoImage} alt="test" />
            <div>{productDetail.productName}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
