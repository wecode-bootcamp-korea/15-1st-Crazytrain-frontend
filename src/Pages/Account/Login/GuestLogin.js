import React, { Component } from "react";

class GuestLogin extends Component {
  render() {
    return (
      <div className="guestLog">
        <div className="guestContainer">
          <div>
            <input
              className="guestOrderNumber"
              type="text"
              placeholder="주문번호"
            />
          </div>
          <div>
            <input className="guestEmail" type="text" placeholder="이메일" />
          </div>
          <div>
            <button className="guestBtn">주문조회</button>
          </div>
        </div>
      </div>
    );
  }
}

export default GuestLogin;
