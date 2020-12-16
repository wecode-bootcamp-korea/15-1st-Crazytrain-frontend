import React from "react";
import "./login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      token: "",
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="mainLogin">
        <div className="loginContainer">
          <div className="header">
            <img
              className="loginLogo addCursor"
              src="/images/login/todayhome.png"
              alt="todayhome"
            />
          </div>
          <div className="loginBox">
            <input
              className="loginId"
              type="text"
              placeholder="이메일"
              onChange={this.handleInputChange}
            />
            <input
              className="loginPw"
              type="password"
              placeholder="비밀번호"
              onchange={this.handleInputChange}
            />
            <button className="loinBtn addCursor">로그인</button>
          </div>

          <div className="loginInfo">
            <span className="rePassword">비밀번호 재설정</span>
            <span className="infoSignUp">회원가입</span>
          </div>
          <div className="loginSns">
            <div className="explainIcon">SNS계정으로 간편 로그인/회원가입</div>
            <div className="loginSnsList">
              <img
                className="loginIconList"
                src="/images/login/facebook.png"
                alt="facebook"
                width="48"
                height="48"
              />
              <img
                className="loginIconList"
                src="/images/login/kakao.png"
                alt="kakao"
                width="48"
                height="48"
              />
              <img
                className="loginIconList"
                src="/images/login/naver.png"
                alt="naver"
                width="48"
                height="48"
              />
            </div>
          </div>
          <div className="loginNomember">비회원 주문 조회하기</div>
        </div>
      </div>
    );
  }
}

export default Login;
