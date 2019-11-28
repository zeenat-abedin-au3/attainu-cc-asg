import React, { Component } from "react";
import { connect } from "react-redux";

class Navigations extends Component {
  render() {
    const {
      nextQuestion,
      lastQuestion,
      firstQuestion,
      prevQuestion,
      length,
      count
    } = this.props;
    return (
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="btn-group pb-2">
            <button className="btn mx-1 btn-secondary" onClick={firstQuestion}>
              First
            </button>
            <button
              disabled={count === 0 ? true : false}
              className="btn mx-1 btn-secondary"
              onClick={prevQuestion}
            >
              Prev
            </button>
            <button
              disabled={count === length - 1 ? true : false}
              className="btn mx-1 btn-primary"
              onClick={nextQuestion}
            >
              Next
            </button>
            <button className="btn mx-1 btn-secondary" onClick={lastQuestion}>
              Last
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    nextQuestion: () =>
      dispatch({
        type: "NEXT_QUESTION"
      }),
    lastQuestion: () =>
      dispatch({
        type: "LAST_QUESTION"
      }),
    firstQuestion: () =>
      dispatch({
        type: "FIRST_QUESTION"
      }),
    prevQuestion: () =>
      dispatch({
        type: "PREV_QUESTION"
      })
  };
};

const mapStateToProps = state => {
  return {
    count: state.quizzes.count,
    length: state.quizzes.length
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigations);
