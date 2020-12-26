import React, { Component } from "react";
import FilterTap from "./FilterMenu/FilterTap";
import CommunityCardList from "./CommunityCardList/CommunityCardList";
import Navigation from "../../../Components/Navigation/Navigation";
import Footer from "../../../Components/Footer/Footer";
import "./CommunityHome.scss";
// const API = "http://10.168.2.120:8000";
const API = "http://10.168.2.99:8000";

class CommunityHome extends Component {
  state = {
    communityCards: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, _) {
    if (prevProps.location.search !== this.props.location.search) {
      this.fetchData();
    }
  }

  fetchData = () => {
    // fetch("/data/community/community_card.json")
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       communityCards: res.communityCards,
    //     });
    //   });
    fetch(`${API}/community/postlist${this.props.history.location.search}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          communityCards: res.result,
        });
      });
  };

  render() {
    console.log(this.state.communityCards);
    return (
      <>
        <Navigation />
        <main className="CommunityHome">
          <div className="communityWrapper">
            <FilterTap fetchData={this.fetchData} />
            <CommunityCardList communityCards={this.state.communityCards} />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
export default CommunityHome;
