import React, { Component } from "react";

const howManyProduct = [
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
    return (
      <>
        {this.props.yj?.map((element, index) => (
          <div className="baguniMain">
            <div className="baguniContentFull">
              <div className="baguniContentFullTop">폭주기관차 폭주 배송</div>
              <div className="baguniContentFullMid">
                <input
                  className="baguniCheckbox"
                  type="checkbox"
                  checked={this.props[`pick${index}`]}
                  onChange={() => this.props.sh(index)}
                />
                <div className="baguniInfo">
                  <div className="baguniInfoTop">
                    <div className="productImg">
                      <img
                        className="productPicture"
                        src={element.productImage}
                        alt="cow"
                      />
                    </div>
                    <div className="priceExplain">
                      <div className="productName">{element.title}</div>
                      <div className="productBtn">X</div>
                    </div>
                  </div>
                  <div className="baguniMid">
                    <div className="baguniInfoMidTop">
                      <span className="oneProduct">단품</span>
                      <div className="deleteProduct">X</div>
                    </div>
                    <div className="baguniInfoMidBottom">
                      <select className="howMany">
                        {howManyProduct.map(element => (
                          <option>{element.num}</option>
                        ))}
                      </select>
                      <span className="howMuchPrice">
                        {element.productPricePcik}
                      </span>
                    </div>
                  </div>
                  <div className="productBottomPrice">
                    <span className="changeOptionBuyTime">
                      <span className="changeOption">옵션변경</span>
                      <span className="buyNow">바로구매</span>
                    </span>
                    <span>{element.productPricePcik}</span>
                  </div>
                </div>
              </div>
              <div className="baguniInfoFoot">배송비 무료</div>
              <div className="baguniContentFullbottom"></div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default BaguniContent;
