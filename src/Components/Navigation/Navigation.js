import React, { Component } from "react";
import "./Navigation.scss";
import { withRouter } from "react-router-dom";
import CommunityPage from "./CommunityPage";
import StorePage from "./StorePage";
import WritingList from "./WritingList";
import OutsideClickHandler from "react-outside-click-handler";
import Baguni from "./Baguni";

class Navigation extends Component {
  constructor() {
    super();
    this.state = { communityNavToggle: true, showButtonBox: false };
  }
  goToLogin = () => {
    this.props.history.push("/Login");
  };

  goToSignUp = () => {
    this.props.history.push("/Signup");
  };

  toggleSubNav = () => {
    this.setState({ communityNavToggle: !this.state.communityNavToggle });
  };

  toggleGoTrue = () => {
    this.setState({ communityNavToggle: true });
  };

  showWriteBox = () => {
    this.setState({ showButtonBox: !this.state.showButtonBox });
  };

  onClickOutside = () => {
    this.setState({ showButtonBox: false });
  };

  render() {
    const { goToLogin, goToSignUp } = this;
    const { showWriteBox } = this;
    return (
      <div>
        <div className="superContainer">
          <div className="fullNavigation">
            <div className="navHead">
              <div className="navLogo">
                <img
                  className="navLogoImg"
                  src="/images/navigation/navToday.png"
                  alt="homeLogo"
                />
              </div>
              <div className="navCategory">
                <button className="category" onMouseEnter={this.toggleGoTrue}>
                  커뮤니티
                </button>
                <button className="store" onMouseEnter={this.toggleSubNav}>
                  스토어
                </button>
              </div>

              <div className="navSearch">
                <input
                  className="searchBar"
                  type="text"
                  placeholder="전문가 검색"
                />
                <img
                  className="navInputImg"
                  src="/images/navigation/glass.png"
                  alt="search"
                />
              </div>
              <div className="navHeadRight">
                <img
                  className="navCart"
                  src="/images/navigation/cart.png"
                  alt="cart"
                />
                <span className="navLogin" onClick={goToLogin}>
                  로그인
                </span>
                <span className="navSignUp" onClick={goToSignUp}>
                  회원가입
                </span>
                <div className="navRightButton">
                  <OutsideClickHandler
                    onOutsideClick={() => this.onClickOutside()}
                  >
                    <button className="navButton" onClick={showWriteBox}>
                      글쓰기
                    </button>
                    {this.state.showButtonBox ? <WritingList /> : ""}
                  </OutsideClickHandler>
                </div>
              </div>
            </div>
          </div>
          <div className="subNav">
            {this.state.communityNavToggle ? (
              <CommunityPage />
            ) : (
              <StorePage toggleSubNav={this.toggleSubNav} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
