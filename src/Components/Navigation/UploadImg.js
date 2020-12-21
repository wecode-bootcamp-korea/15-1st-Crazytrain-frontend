import React, { Component } from "react";
import Dropzone from "react-dropzone";
import "./UploadImg.scss";
import { UploadImgData } from "./UploadImgData";

class UploadImg extends Component {
  render() {
    console.log();
    return (
      <div>
        <div className="UploadImgAllPage">
          <div className="UploadImgNav">
            <img
              className="UploadImgTitleImg"
              src="/images/login/todayhome.png"
              alt="#"
            />
          </div>
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
            <button className="footBtn">올리기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadImg;
