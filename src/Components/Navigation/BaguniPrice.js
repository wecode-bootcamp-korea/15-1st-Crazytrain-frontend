import React, { Component } from "react";

const priceInfoCategory = [
  {
    name: "총 상품금액",
    price: "50000원",
  },
  {
    name: "총 배송비",
    price: "+ 0원",
  },
  {
    name: "총 할인금액",
    price: "- 1000원",
  },
  {
    name: "결제금액",
    price: "49000원",
  },
];

class BaguniPrice extends Component {
  render() {
    return (
      <div>
        <div className="rigntContainerFull">
          <div className="rigntContainer">
            {priceInfoCategory.map((element, index) => (
              <div className="full">
                <div
                  className={`productPayInfo ${
                    priceInfoCategory.length - 1 === index ? "boldText" : ""
                  }`}
                >
                  {element.name}
                </div>
                <div
                  className={`productPricePayInfo ${
                    priceInfoCategory.length - 1 === index ? "powerText" : ""
                  }`}
                >
                  {element.price}
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
