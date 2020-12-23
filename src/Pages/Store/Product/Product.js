import React, { Component } from "react";
import "./Product.scss";

class Product extends Component {
  render() {
    return (
      <>
        <div className="Product">
          <div className="overviewContainer">
            <div className="overviewCategory">
              {"가구 > 주방 > 홈바 / 아일랜드식탁"}
            </div>
            <div className="containerRow">
              <div className="rowLeft">
                <ul className="imageList">
                  <li className="smallImage">
                    <img src="../images/store/smaple_desk2.webp" alt="test2" />
                  </li>
                  <li className="smallImage">
                    <img src="../images/store/smaple_desk2.webp" alt="test2" />
                  </li>
                  <li className="smallImage">
                    <img src="../images/store/smaple_desk2.webp" alt="test2" />
                  </li>
                  <li className="smallImage">
                    <img src="../images/store/smaple_desk2.webp" alt="test2" />
                  </li>
                  <li className="smallImage">
                    <img src="../images/store/smaple_desk2.webp" alt="test2" />
                  </li>
                  <li className="smallImage">
                    <img src="../images/store/smaple_desk2.webp" alt="test2" />
                  </li>
                </ul>

                <div className="bigImageWrap">
                  <img src="../images/store/sample_desk.webp" alt="test" />
                </div>
              </div>
              <div className="rowRight">
                <div className="rightHeader"></div>
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
