import React from "react";
import "./Signup.scss";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
                  />
                  <span className="golbang">@</span>
                  <input className="choiceEmail" type="text" />
                </span>
              </div>
              <div className="signUpPassword">
                <div className="passwordTitle">비밀번호</div>
                <div className="explainPassword">8자 이상 입력해주세요</div>
                <input
                  className="writePassword"
                  type="password"
                  placeholder="비밀번호"
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
                />
              </div>
              <div className="agreement">약관 동의</div>
              <div className="agreementBox">
                <div className="okSign">
                  <input className="checkBox" type="checkbox" />
                  <span className="checkBoxSign">전체동의</span>
                </div>
                <div className="fourCheck">
                  <div className="fourTeen">
                    <input className="checkBox" type="checkbox" />
                    <span className="moreFourTeen">만 14세 이상입니다.</span>
                    <span className="essentional">(필수)</span>
                  </div>
                  <div className="explainRule">
                    <input className="checkBox" type="checkbox" />
                    <span className="explaingRuleUnderline">이용약관</span>
                    <span className="essentional">(필수)</span>
                  </div>
                  <div className="personalInfo">
                    <input className="checkBox" type="checkbox" />
                    <span className="infoUser">개인정보처리방침</span>
                    <span className="essentional">(필수)</span>
                  </div>
                  <div className="messageGet">
                    <input className="checkBox" type="checkbox" />
                    <span className="messageEvent">
                      이벤트, 프로모션 알림 메일 및 SMS 수신.
                    </span>
                    <span className="essentional">(필수)</span>
                  </div>
                </div>
                <button className="completeButton">회원가입 완료</button>
                <div className="footer">이미 아이디가 있으신가요? 로그인</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
