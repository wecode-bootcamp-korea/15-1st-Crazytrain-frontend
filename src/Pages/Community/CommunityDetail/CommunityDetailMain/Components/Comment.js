import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  state = {
    inputValue: "",
  };

  updateInputValue = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  addComment = e => {
    e.preventDefault();
    this.props.addComment(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  };

  render() {
    const { comments } = this.props;
    return (
      <section className="Comment">
        <header>
          <span>댓글</span>
          <span>{comments?.length}</span>
        </header>
        <form>
          <img
            src={"/images/community/userprofileimage.jpeg"}
            alt={"userProfile"}
          />
          <input
            value={this.state.inputValue}
            onChange={this.updateInputValue}
            placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)"
          />
          <button
            disabled={this.state.inputValue.length === 0 ? true : false}
            onClick={this.addComment}
          >
            등록
          </button>
        </form>
        {comments?.map(comment => {
          return (
            <section key={comment.id} className="comments">
              <div className="column">
                <img src={comment.userProfileImage} alt="asd" />
                <span className="userName">{comment.userId}</span>
                <span>{comment.comment}</span>
              </div>
              <div className="column">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
                </svg>
              </div>
            </section>
          );
        })}
      </section>
    );
  }
}

export default Comment;
