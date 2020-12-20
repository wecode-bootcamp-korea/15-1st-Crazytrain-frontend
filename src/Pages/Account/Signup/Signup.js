import React from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emailAdress: "",
      pw: "",
      nickname: "",
      allCheck: false,
      check1: false,
      check2: false,
      check3: false,
      check4: false,
    };
  }

  checkValidation = e => {
    const { email, pw, nickname, emailAdress } = this.state;
    // const k = `${email}@${emailAdress}`;
    // console.log(k);
    fetch("http://10.168.2.99:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: `${email}@${emailAdress}`,
        password: pw,
        nickname: nickname,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.message === "SUCCESS") {
          window.alert("회원가입 성공");
          this.props.history.push("./Login");
        } else {
          window.alert("회원가입 실패");
        }
      });
  };
  checkInputValue = e => {
    const { name, value } = e.target;
    // console.log(name, value);
    this.setState({
      [name]: value,
    });
  };

  singUpPress = e => {
    if (e.key === "Enter") {
      this.checkValidation();
    }
  };

  //agree all logic
  handleAllChecked = () => {
    const { allCheck } = this.state;
    this.setState({
      allCheck: !allCheck,
      check1: !allCheck,
      check2: !allCheck,
      check3: !allCheck,
      check4: !allCheck,
    });
  };

  handleCheck1 = () => {
    this.setState({
      check1: !this.state.check1,
    });
  };
  handleCheck2 = () => {
    this.setState({
      check2: !this.state.check2,
    });
  };
  handleCheck3 = () => {
    this.setState({
      check3: !this.state.check3,
    });
  };
  handleCheck4 = () => {
    this.setState({
      check4: !this.state.check4,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { check1, check2, check3, check4 } = this.state;
    let beforeValue = 0,
      afterValue = 0;
    if (prevState.check1) beforeValue++;
    if (prevState.check2) beforeValue++;
    if (prevState.check3) beforeValue++;
    if (prevState.check4) beforeValue++;

    if (check1) afterValue++;
    if (check2) afterValue++;
    if (check3) afterValue++;
    if (check4) afterValue++;

    if (beforeValue < 4 && afterValue === 4) {
      this.setState({
        allCheck: true,
      });
    }
    if (beforeValue === 4 && afterValue < 4) {
      this.setState({
        allCheck: false,
      });
    }
  }
  render() {
    const { check1, check2, check3, check4 } = this.state;
    const { email, emailAdress, pw, nickname } = this.state;

    return (
      <div className="signUpFullPage">
        <div className="smallContainer">
          <img
            className="signUpImg"
            src="/images/login/todayhome.png"
            alt="todayhome"
          />
          <div className="printContainer">
            <div className="signUpContainer">
              <div className="signUpHeader">
                <div className="signUptitle">회원가입</div>
                <div className="signUpExplain">
                  SNS계정으로 간편하게 회원가입
                </div>
                <div className="signUpSnsImg">
                  <img
                    className="signUpIconImg"
                    src="/images/login/facebook.png"
                    alt="facebook"
                  />
                  <img
                    className="signUpIconImg"
                    src="/images/login/kakao.png"
                    alt="kakao"
                  />
                  <img
                    className="signUpIconImg"
                    src="/images/login/naver.png"
                    alt="naver"
                  />
                </div>
              </div>
              <div className="signUpEmail">
                <div className="EmailTitle">이메일</div>
                <span className="EmailInput">
                  <input
                    className="writeEmail"
                    type="email"
                    placeholder="이메일"
                    onChange={this.checkInputValue}
                    name="email"
                  />
                  <span className="golbang">@</span>
                  <select onClick={this.checkInputValue} name="emailAdress">
                    <option selected>이메일 선택</option>
                    <option>naver.com</option>
                    <option>daum.net</option>
                    <option>gmail.com</option>
                    <option>nate.com</option>
                    <option>hanmail.net</option>
                    <option>icloud.com</option>
                    <option>직접입력</option>
                  </select>
                </span>
              </div>
              <div className="signUpPassword">
                <div className="passwordTitle">비밀번호</div>
                <div className="explainPassword">8자 이상 입력해주세요</div>
                <input
                  className="writePassword"
                  type="password"
                  placeholder="비밀번호"
                  name="pw"
                  onChange={this.checkInputValue}
                />
              </div>
              <div className="confirmPassword">
                <div className="confirmTitle">비밀번호 확인</div>
                <input
                  className="reConfirmPassword"
                  type="password"
                  placeholder="비밀번호 확인"
                />
              </div>
              <div className="nickName">
                <div className="nickNameTitle">별명</div>
                <div className="explainNickname">
                  다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)
                </div>
                <input
                  className="writeNickname"
                  type="text"
                  placeholder="별명 (2~15자)"
                  name="nickname"
                  onChange={this.checkInputValue}
                />
              </div>

              {/* 약관동의 */}
              <div className="agreement">약관 동의</div>
              <div className="agreementBox">
                <div className="okSign">
                  <input
                    className="checkBox"
                    type="checkbox"
                    checked={this.state.allCheck}
                    onChange={this.handleAllChecked}
                  />
                  <span className="checkBoxSign">전체동의</span>
                </div>
                <div className="fourCheck">
                  <div className="sameRule">
                    <input
                      className="checkBox"
                      type="checkbox"
                      checked={check1}
                      onChange={this.handleCheck1}
                    />
                    <span className="moreFourTeen">만 14세 이상입니다.</span>
                    <span className="essentional">(필수)</span>
                  </div>
                  <div className="sameRule">
                    <input
                      className="checkBox"
                      type="checkbox"
                      checked={check2}
                      onChange={this.handleCheck2}
                    />
                    <span className="explaingRuleUnderline">이용약관</span>
                    <span className="essentional">(필수)</span>
                  </div>
                  <div className="sameRule">
                    <input
                      className="checkBox"
                      type="checkbox"
                      checked={check3}
                      onChange={this.handleCheck3}
                    />
                    <span className="infoUser">개인정보처리방침</span>
                    <span className="essentional">(필수)</span>
                  </div>
                  <div className="sameRule">
                    <input
                      className="checkBox"
                      type="checkbox"
                      checked={check4}
                      onChange={this.handleCheck4}
                    />
                    <span className="messageEvent">
                      이벤트, 프로모션 알림 메일 및 SMS 수신.
                    </span>
                    <span className="essentional">(필수)</span>
                  </div>
                </div>
                <button
                  className="completeButton"
                  onClick={this.checkValidation}
                  onKeyPress={this.singUpPress}
                >
                  회원가입 완료
                </button>
                <Link to="/Login">
                  <div className="footer">이미 아이디가 있으신가요? 로그인</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
