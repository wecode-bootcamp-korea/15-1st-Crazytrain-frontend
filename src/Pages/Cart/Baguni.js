import React, { Component } from "react";
import BaguniContent from "../Cart/BaguniContent";
import BaguniPrice from "../Cart/BaguniPrice";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import "./Baguni.scss";

const API = "http://10.168.2.99:8000";

class Baguni extends Component {
  state = {
    allPick: false,
    data: [],
    pick: [],
    count: [],
  };

  handleAllpick = () => {
    let isClicked = !this.state.allPick;
    this.setState({
      allPick: isClicked,
      pick: Array(this.state.data.length).fill(isClicked),
    });
  };

  handlePick = id => {
    const newPick = [...this.state.pick];
    if (newPick[id] === undefined) {
      newPick[id] = false;
    }
    newPick[id] = !newPick[id];
    this.setState(prev => ({
      pick: newPick,
    }));
  };

  componentDidUpdate(_, prevState) {
    let allPicked = true;
    for (let i of this.state.pick) {
      if (i !== true) {
        allPicked = false;
        break;
      }
    }

    if (allPicked !== prevState.allPick) {
      this.setState({
        allPick: allPicked,
      });
    }
  }

  checkInputCount = (value, idx) => {
    const newCount = [...this.state.count];
    newCount[idx] = Number(value);
    this.setState(
      {
        count: newCount,
      },
      () => this.updateCart(idx)
    );
  };

  getCart = () => {
    fetch(`${API}/shopping/cart`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(res => res.json())
      .then(res => {
        const cartCount = res.CART_LIST.map(cartitem =>
          cartitem ? cartitem.quantity : 1
        );
        this.setState({
          data: res.CART_LIST,
          pick: Array(res.CART_LIST.length).fill(false),
          count: cartCount,
        });
      });
  };

  // deleteCart = () => {
  //   fetch(`${API}/shopping/cart/delete1`, {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: localStorage.getItem("token"),
  //     },
  //     body: {
  //       cart_id: 1,
  //       user_id: 3,
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //     });
  // };

  updateCart = targetIndex => {
    fetch(`${API}/shopping/cart/${this.state.data[targetIndex].id}`, {
      method: "PATCH",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        counts: this.state.count[targetIndex],
        cart_id: this.state.data[targetIndex].id,
      }),
    });
  };

  componentDidMount = () => {
    this.getCart();
    // this.deleteCart();
  };

  render() {
    const { pick, count, data } = this.state;
    return (
      <div>
        <Navigation />
        <div className="baguniFull">
          <div className="underNavigation">
            <div className="baguniLeft">
              <div className="baguniLeftTop">
                <div className="contentAllCheckBtn">
                  <input
                    className="baguniCheckPointAll"
                    type="checkbox"
                    checked={this.state.allPick}
                    onChange={this.handleAllpick}
                  />
                  <div className="baguniCheckBtn">모두선택</div>
                </div>
                <div className="baguniDeleteBtn">선택삭제</div>
              </div>
              <div className="asd">
                {this.state.data?.map((cartItem, index) => {
                  return (
                    <BaguniContent
                      key={index}
                      idx={index}
                      cartItem={cartItem}
                      handlePick={this.handlePick}
                      checkInputCount={this.checkInputCount}
                      pick={this.state.pick[index]}
                      count={this.state.count[index]}
                    />
                  );
                })}
              </div>
            </div>{" "}
            <div className="baguniRight">
              <BaguniPrice
                pick={pick}
                count={count}
                price={data.map(element => Number(element.option))}
              />
            </div>
          </div>
          <div className="baguniFooter"></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Baguni;
