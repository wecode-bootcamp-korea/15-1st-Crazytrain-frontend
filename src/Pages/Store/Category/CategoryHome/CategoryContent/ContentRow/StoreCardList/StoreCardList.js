import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import SalesArticle from "../../../../../Component/SalesArticle/SalesArticle";
import "./StoreCardList.scss";

class StoreCardList extends Component {
  render() {
    const { storeCards, fetchMoreData } = this.props;
    return (
      <InfiniteScroll
        dataLength={storeCards.length}
        next={fetchMoreData}
        hasMore={true}
      >
        <div className="StoreCardList">
          <ul className="itemsWrap">
            {storeCards?.map((article, index) => (
              <SalesArticle key={index} article={article} type="mainList" />
            ))}
          </ul>
        </div>
      </InfiniteScroll>
    );
  }
}

export default StoreCardList;
