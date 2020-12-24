import React, { Component } from "react";

const HOW_MANY_PRODUCT = [
  {
    num: "1",
  },
  {
    num: "2",
  },
  {
    num: "3",
  },
  {
    num: "4",
  },
  {
    num: "5",
  },
  {
    num: "6",
  },
  {
    num: "7",
  },
  {
    num: "8",
  },
  {
    num: "9",
  },
  {
    num: "10",
  },
];

class BaguniContent extends Component {
  render() {
    const {
      cartItem,
      pick,
      handlePick,
      checkInputCount,
      idx,
      count,
    } = this.props;
    const { product_name, image_url, option: price } = cartItem;
    return (
      <>
        <div className="baguniMain">
          <div className="baguniContentFull">
            <div className="baguniContentFullTop">폭주기관차 폭주 배송</div>
            <div className="baguniContentFullMid">
              <input
                className="baguniCheckbox"
                type="checkbox"
                checked={pick}
                onChange={() => handlePick(idx)}
              />
              <div className="baguniInfo">
                <div className="baguniInfoTop">
                  <div className="productImg">
                    <img className="productPicture" src={image_url} alt="cow" />
                  </div>
                  <div className="priceExplain">
                    <div className="productName">{product_name}</div>
                    <div className="productBtn">X</div>
                  </div>
                </div>
                <div className="baguniMid">
                  <div className="baguniInfoMidTop">
                    <span className="oneProduct">단품</span>
                  </div>
                  <div className="baguniInfoMidBottom">
                    <select
                      className="howMany"
                      value={count}
                      onChange={e => checkInputCount(e.target.value, idx)}
                    >
                      {HOW_MANY_PRODUCT.map((element, index) => (
                        <option key={index} value={element.num}>
                          {element.num}
                        </option>
                      ))}
                    </select>
                    <span className="howMuchPrice">{`${(
                      Number(price) * count
                    ).toLocaleString()} 원`}</span>
                  </div>
                </div>
                <div className="productBottomPrice">
                  <span className="changeOptionBuyTime">
                    <span className="changeOption">옵션변경</span>
                    <span className="buyNow">바로구매</span>
                  </span>
                  <span>{`${(
                    Number(price) * count
                  ).toLocaleString()} 원`}</span>
                </div>
              </div>
            </div>
            <div className="baguniInfoFoot">배송비 무료</div>
            <div className="baguniContentFullbottom"></div>
          </div>
        </div>
      </>
    );
  }
}

export default BaguniContent;
