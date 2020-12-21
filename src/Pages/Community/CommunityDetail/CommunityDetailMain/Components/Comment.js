import React, { Component } from "react";

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
      <section className="commentSection">
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
              <img src={comment.userProfileImage} alt="asd" />
              <span className="userName">{comment.userId}</span>
              <span>{comment.comment}</span>
            </section>
          );
        })}
      </section>
    );
  }
}

export default Comment;
