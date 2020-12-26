import React, { Component } from "react";

const priceInfoCategory = [
  "총 상품금액",
  "총 배송비",
  "총 할인금액",
  "결제금액",
];
class BaguniPrice extends Component {
  render() {
    const { price, pick, count } = this.props;
    const totalPrice = price?.reduce((acc, curr, index) => {
      const isPicked = pick[index] ? count[index] : 0;
      return acc + curr * count[index] * isPicked;
    }, 0);

    return (
      <div>
        <div className="rigntContainerFull">
          <div className="rigntContainer">
            {priceInfoCategory.map((name, index) => (
              <div key={index} className="full">
                <div
                  className={`productPayInfo ${
                    priceInfoCategory.length - 1 === index ? "boldText" : ""
                  }`}
                >
                  {name}
                </div>
                <div
                  className={`productPricePayInfo ${
                    priceInfoCategory.length - 1 === index ? "powerText" : ""
                  }`}
                >
                  {index === 1
                    ? "배송비 무료"
                    : index === 2
                    ? "0원"
                    : `${totalPrice.toLocaleString()}원`}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="buyButton">상품 구매하기</button>
      </div>
    );
  }
}

export default BaguniPrice;
