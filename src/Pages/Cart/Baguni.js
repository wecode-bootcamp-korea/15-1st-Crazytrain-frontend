import React, { Component } from "react";
import BaguniContent from "../Cart/BaguniContent";
import BaguniPrice from "../Cart/BaguniPrice";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import "./Baguni.scss";

const API = "";

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
    this.setState({
      count: newCount,
    });
    this.updateCart(API, idx);
  };

  // addTest = API => {
  //   fetch(API, {
  //     method: "POST",
  //     headers: {
  //       Authorization: localStorage.getItem("token"),
  //     },
  //     body: JSON.stringify({
  //       product_id: "2",
  //       quantity: 1,
  //       size_id: "1",
  //       color_id: "1",
  //       price_id: "1",
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //     });
  // };

  getTest = API => {
    fetch(API, {
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

  updateCart = (API, targetIndex) => {
    // console.log(
    //   JSON.stringify({
    //     counts: this.state.count[targetIndex].toString(),
    //     cart_id: this.state.data[targetIndex].id.toString(),
    //   })
    // );
    // fetch(
    //   `http://10.168.2.99:8000/shopping/cart/${this.state.data[targetIndex].id}`,
    //   {
    //     method: "POST",
    //     headers: {
    //       Authorization: localStorage.getItem("token"),
    //     },
    //     body: JSON.stringify({
    //       counts: this.state.count[targetIndex].toString(),
    //       cart_id: this.state.data[targetIndex].id,
    //     }),
    //   }
    // )
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //   });

    fetch(
      `http://10.168.2.99:8000/shopping/cart/${this.state.data[targetIndex].id}`,
      {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          counts: this.state.count[targetIndex].toString(),
          cart_id: this.state.data[targetIndex].id,
        }),
      }
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  };

  componentDidMount = () => {
    this.getTest("http://10.168.2.99:8000/shopping/cart");
    // fetch("/data/navigation/data.json")
    //   .then(response => response.json())
    //   .then(result => {
    //     this.setState({
    //       data: result.data,
    //       pick: Array(result.data.length).fill(false),
    //       count: Array(result.data.length).fill(1),
    //     });
    //   });

    // fetch("/data/navigation/data.json")
    //   .then(res => res.json())
    //   .then(res => {
    //     const cartCount = res.CART_LIST.map(cartitem =>
    //       cartitem ? cartitem.quantity : 1
    //     );
    //     this.setState({
    //       data: res.CART_LIST,
    //       pick: Array(res.CART_LIST.length).fill(false),
    //       count: cartCount,
    //     });
    //   });
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
                price={data.map(element => Number(element.price))}
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
