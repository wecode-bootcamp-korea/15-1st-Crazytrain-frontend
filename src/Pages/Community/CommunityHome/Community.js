import React from "react";
import FilterTap from "./Components/FilterTap";
import CommunityCardList from "./Components/CommunityCardList";
import { API } from "../../../config";
import "./Community.scss";

class Community extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      communityCards: [],
    };
  }
  componentDidMount() {
    fetch(`${API}/data/community/data.json`)
      .then(response => response.json())
      .then(result => {
        const { communityCards } = result;
        this.setState({
          communityCards,
        });
      });
  }
  render() {
    return (
      <>
        <nav>여기에는 이후에 완성된 네비게이션 컴포넌트가 올껍니다!</nav>
        <main className="communityBody">
          <div className="wrapper">
            <FilterTap />
            <CommunityCardList communityCards={this.state.communityCards} />
          </div>
        </main>
      </>
    );
  }
}

export default Community;
