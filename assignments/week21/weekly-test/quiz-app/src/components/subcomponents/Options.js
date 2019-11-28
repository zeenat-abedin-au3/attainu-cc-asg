import React, { Component } from "react";
import { connect } from "react-redux";

class Options extends Component {
  handleClick = option => {
    this.props.selectedAnswer(this.props.questionId, option.id);
    if (this.props.count + 1 < this.props.length) {
      this.props.nextQuestion();
    }
  };
  render() {
    const { options, selected } = this.props.currentQuestion;
    return (
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            {options.map(option => {
              return (
                <li
                  key={option.id}
                  className={`list-group-item my-1 ${
                    selected ? (option.id === selected ? "selected" : "") : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => this.handleClick(option)}
                >
                  {option.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectedAnswer: (questionId, optionId) =>
      dispatch({
        type: "SELECTED_ANSWER",
        payload: { questionId, optionId }
      }),
    nextQuestion: () =>
      dispatch({
        type: "NEXT_QUESTION"
      })
  };
};

const mapStateToProps = state => {
  return {
    currentQuestion: state.quizzes.currentQuestion,
    count: state.quizzes.count,
    length: state.quizzes.length
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
