import React, { Component } from "react";
import FilterControl from "./FilterControl/FilterControl";
import FilterTag from "./FilterControl/FilterList/FilterTag/FilterTag";
import "./ContentFilter.scss";

class ContentFilter extends Component {
  state = {
    categories: [],
    names: [],
    tags: [],
  };

  clickRestTag = () => {
    this.setState({
      tags: [],
    });
  };

  removeTag = value => {
    const { tags } = this.state;

    this.setState({
      tags: tags.filter(tag => tag.text !== value.text),
    });
  };

  addTag = value => {
    const { tags } = this.state;

    this.setState({
      tags:
        value.type === "price"
          ? tags.filter(tag => tag.type === "none").concat(value)
          : tags.concat(value),
    });
  };

  componentDidMount() {
    fetch("/data/store/filterCategories.json")
      .then(response => response.json())
      .then(result => {
        this.setState({
          categories: result.categories,
          names: result.categories.map(category => category.name),
        });
      });
  }

  render() {
    const { categories, names, tags } = this.state;
    const { addTag, removeTag, clickRestTag } = this;

    return (
      <div className="ContentFilter">
        <div className="controllList">
          <ul>
            {categories.length > 0 &&
              categories.map((category, index) => (
                <FilterControl
                  key={category.name}
                  category={category}
                  name={names[index]}
                  addTag={addTag}
                  removeTag={removeTag}
                  tags={tags}
                />
              ))}
          </ul>
        </div>
        <div className={this.state.tags.length > 0 ? "tagList" : "hideBox"}>
          <div className="tagListContainer">
            <ul className="tagListBox">
              {tags.map((tag, index) => (
                <FilterTag key={index} tag={tag} removeTag={removeTag} />
              ))}
            </ul>
          </div>
          <button className="tagListClear" onClick={clickRestTag}>
            <div className="textBox">
              <svg className="icon" width="14" height="14" viewBox="0 0 20 20">
                <g fill="none">
                  <path d="M0 0h20v20H0z" />
                  <path
                    fill="#757575"
                    d="M8.958.833c3.844 0 7.157 2.488 8.417 6.019l.887-1.538a.834.834 0 011.444.833L17.67 9.671a.833.833 0 01-1.138.305l-3.524-2.035a.833.833 0 11.833-1.443l2.054 1.186C14.943 4.654 12.174 2.5 8.958 2.5c-4.022 0-7.291 3.353-7.291 7.5s3.269 7.5 7.291 7.5c2.47 0 4.73-1.272 6.075-3.35a.833.833 0 011.399.905c-1.647 2.546-4.43 4.112-7.474 4.112C4.006 19.167 0 15.058 0 10S4.006.833 8.958.833z"
                  />
                </g>
              </svg>
              <span className="buttonName">초기화</span>
            </div>
          </button>
        </div>
        <div className="summary">
          <span className="summaryLeft">전체 74,709개</span>
          <button className="summaryRight">
            많은리뷰순
            <svg className="icon" width="8" height="8" viewBox="0 0 8 8">
              <path fill="#BDBDBD" d="M0 2l4 4 4-4z"></path>
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default ContentFilter;
