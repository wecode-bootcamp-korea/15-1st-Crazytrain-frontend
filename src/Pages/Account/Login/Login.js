import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import GuestLogin from "./GuestLogin";
import { LOGIN_API } from "../../../config";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      token: "",
      showGuestBox: false,
    };
  }

  signIn = () => {
    fetch(LOGIN_API, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.message === "SUCCESS") {
          alert("로그인 성공");
          localStorage.setItem("token", res.TOKEN);
          localStorage.setItem("username", res.NAME);
          localStorage.setItem("profile", res.IMAGE);
          this.props.history.push("/");
        } else alert("회원 정보가 잘못되었읍니다.");
      });
  };

  signInPress = e => {
    const { id, pw } = this.state;
    const isValid = id.includes("@") && pw.length >= 4;
    if (isValid === false) {
      alert("check your ID or Password");
    }
    if (isValid === true) {
      this.signIn();
    }
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  showGuest = () => {
    this.setState({ showGuestBox: !this.state.showGuestBox });
  };

  render() {
    const { id, pw } = this.state;
    return (
      <div className="mainLogin">
        <div className="loginContainer">
          <div className="header">
            <Link to="/">
              <img
                className="loginLogo addCursor"
                src="/images/login/todayhome.png"
                alt="todayhome"
              />
            </Link>
          </div>
          <div className="loginBox">
            <input
              className="loginId"
              type="text"
              placeholder="이메일"
              name="id"
              onChange={this.handleInputChange}
            />
            <input
              className="loginPw"
              type="password"
              placeholder="비밀번호"
              name="pw"
              onChange={this.handleInputChange}
            />
            <button
              className="loinBtn addCursor"
              onClick={this.signIn}
              onKeyPress={this.signInPress}
            >
              로그인
            </button>
          </div>

          <div className="loginInfo">
            <span className="rePassword">비밀번호 재설정</span>
            <Link to="/Signup">
              <span className="infoSignUp">회원가입</span>
            </Link>
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
          <div>
            <div className="loginNomember" onClick={this.showGuest}>
              비회원 주문 조회하기
            </div>
            {this.state.showGuestBox ? <GuestLogin /> : ""}
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Login;
