import React, { Component } from "react";
import { UploadImgData } from "./UploadImgData";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import "./UploadImg.scss";

class UploadImg extends Component {
  constructor() {
    super();
    this.state = {
      yj: "",
      sh: "",
      th: "",
      mc: "",
    };
  }

  checkInputVal = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    console.log();
    return (
      <div>
        <div className="UploadImgAllPage">
          <div className="UploadImgNav"></div>
          <div className="UploadImgContainer">
            <div className="innerContainer">
              <div className="UploadImgTitle">사진 올리기</div>
              <div className="UploadImgInputContainer">
                <select className="areaSize">
                  {UploadImgData.key1.map(element => (
                    <option>{element.name}</option>
                  ))}
                </select>
                <select className="typeOfLife">
                  {UploadImgData.key2.map(element => (
                    <option>{element.name}</option>
                  ))}
                </select>
                <select className="pickStyle">
                  {UploadImgData.key3.map(element => (
                    <option>{element.name}</option>
                  ))}
                </select>
              </div>
              <div className="contentBox">
                <div className="dropImg">
                  <img
                    className="dropImgSpace"
                    src="/images/navigation/drop.png"
                    alt="#"
                  />
                </div>
                <div className="twoInput">
                  <div className="inputSpace">
                    <select className="spaceEssential">
                      {UploadImgData.key4.map(element => (
                        <option>{element.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="imgExplain">
                    <input
                      className="explainArea"
                      type="textarea"
                      placeholder="사진에 대해서 설명해주세요."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <button
              className="footBtn"
              onClick={() => this.props.history.push("/")}
            >
              올리기
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default UploadImg;
