import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CommunityPage from "./CommunityPage";
import StorePage from "./StorePage";
import WritingList from "./WritingList";
import OutsideClickHandler from "react-outside-click-handler";
import { ReactComponent as CartIcon } from "./cart_icon.svg";
import "./Navigation.scss";

class Navigation extends Component {
  state = { communityNavToggle: true, showButtonBox: false };

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
    const { showWriteBox } = this;
    const headerRight = localStorage.getItem("token") ? (
      <>
        <img
          className="loggedinImage"
          src={localStorage.getItem("profile")}
          alt="sometihng"
        />
        <span className="loggedinNickname">
          {localStorage.getItem("username")}
        </span>
      </>
    ) : (
      <>
        <span
          className="navLogin"
          onClick={() => this.props.history.push("/login")}
        >
          로그인
        </span>
        <span
          className="navSignUp"
          onClick={() => this.props.history.push("/signup")}
        >
          회원가입
        </span>
      </>
    );
    return (
      <div>
        <div className="superContainer">
          <div className="fullNavigation">
            <div className="navHead">
              <div className="navLogo">
                <img
                  onClick={() => this.props.history.push("/")}
                  className="navLogoImg addCursor"
                  src="/images/navigation/navToday.png"
                  alt="homeLogo"
                />
              </div>
              <div className="navCategory">
                <button
                  className="category"
                  onMouseEnter={this.toggleGoTrue}
                  onClick={() => this.props.history.push("/")}
                >
                  커뮤니티
                </button>
                <button
                  className="store"
                  onMouseEnter={this.toggleSubNav}
                  onClick={() => this.props.history.push("/storemain")}
                >
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
                <CartIcon onClick={() => this.props.history.push("/cart")} />
                {headerRight}
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
