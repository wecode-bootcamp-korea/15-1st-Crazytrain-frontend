import React, { Component } from "react";
import SalesArticle from "../Component/SalesArticle/SalesArticle";
import "./ContentMdpick.scss";

class ContentMdpick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdpickArticle: [],
    };
  }

  componentDidMount() {
    fetch("/data/store/products.json")
      .then(response => response.json())
      .then(result => {
        this.setState({
          mdpickArticle: result.salesArticles.filter(
            article => article.itemBadge === "특가"
          ),
        });
      });
  }

  render() {
    const { mdpickArticle } = this.state;

    return (
      <div className="ContentMdpick">
        <div className="mdpickTitle">#지금은 할인 중</div>
        <div className="mdpickItems">
          <ul className="itemsWrap">
            {mdpickArticle?.map((article, index) => (
              <SalesArticle type="mdpick" article={article} key={index} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ContentMdpick;
