import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import GuestLogin from "./GuestLogin";

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
    fetch("http://10.168.2.99:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === "SUCCESS") {
          console.log("goodjob");
          alert("Login SUCCESS");
          localStorage.setItem("token", res.TOKEN);
          this.props.history.push("/Navigation");
        } else alert("FAIL");
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
    // console.log(this.state.showGuestBox);
    return (
      <div className="mainLogin">
        <div className="loginContainer">
          <div className="header">
            <Link to="/Navigation">
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
