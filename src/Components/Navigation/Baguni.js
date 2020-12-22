import React, { Component } from "react";
import Navigation from "./Navigation";
import BaguniContent from "./BaguniContent";
import BaguniPrice from "./BaguniPrice";
import "./Baguni.scss";

class Baguni extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      allPick: false,
      pick0: false,
      pick1: false,
      pick2: false,
      pick3: false,
      pick4: false,
    };
  }

  handleAllpick = () => {
    const { allPick } = this.state;
    this.setState({
      allPick: !allPick,
      pick0: !allPick,
      pick1: !allPick,
      pick2: !allPick,
      pick3: !allPick,
      pick4: !allPick,
    });
  };

  handlePick = id => {
    let allPicked = true;
    for (let i = 0; i <= 5; i++) {
      if (!this.state[`pick${i}`]) {
        allPicked = false;
        break;
      }
    }
    this.setState(prev => ({
      allPick: allPicked,
      [`pick${id}`]: !prev[`pick${id}`],
    }));
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/data/navigation/data.json")
      .then(response => response.json())
      .then(result => {
        this.setState({
          data: result.data,
        });
      });
  };
  //아직 고민중인 로직이라 지우지 않았습니다!!
  // componentDidUpdate(prevProps, prevState) {
  //   const { pick1, pick2, pick3, pick4, pick0 } = this.state;
  //   let beforePick = 0,
  //     afterPick = 0;
  //   if (prevState.pick0) beforePick++;
  //   if (prevState.pick1) beforePick++;
  //   if (prevState.pick2) beforePick++;
  //   if (prevState.pick3) beforePick++;
  //   if (prevState.pick4) beforePick++;

  //   if (pick0) afterPick++;
  //   if (pick1) afterPick++;
  //   if (pick2) afterPick++;
  //   if (pick3) afterPick++;
  //   if (pick4) afterPick++;

  //   if (beforePick < 5 && afterPick === 5) {
  //     this.setState({
  //       allCheck: true,
  //     });
  //   }
  //   if (beforePick === 5 && afterPick < 5) {
  //     this.setState({
  //       allCheck: false,
  //     });
  //   }
  // }
  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>
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
                <BaguniContent
                  yj={this.state.data}
                  sh={this.handlePick}
                  pick0={this.state.pick0}
                  pick1={this.state.pick1}
                  pick2={this.state.pick2}
                  pick3={this.state.pick3}
                  pick4={this.state.pick4}
                />
              </div>
            </div>
            <div className="baguniRight">
              <BaguniPrice />
            </div>
          </div>
          <div className="baguniFooter"></div>
        </div>
      </div>
    );
  }
}

export default Baguni;
