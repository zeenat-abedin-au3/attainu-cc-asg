import React, { Component } from "react";
import { connect } from "react-redux";

import Options from "./subcomponents/Options";
import Navigations from "./subcomponents/Navigations";

class Question extends Component {
  componentDidMount() {
    this.props.firstQuestion();
  }
  render() {
    if (!this.props.currentQuestion) {
      return <h1 className="text-center">Loading</h1>;
    }
    const { questionTypeId, name, id } = this.props.currentQuestion;
    return (
      <div className="card my-2">
        <h5 className="card-header">
          {questionTypeId}. {name}
          <span className="badge badge-info float-right">
            Question {questionTypeId} of {this.props.length}
          </span>
        </h5>
        <div className="card-body">
          <Options questionId={id} />
        </div>
        <Navigations />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentQuestion: state.quizzes.currentQuestion,
    length: state.quizzes.length
  };
};
const mapDispatchToProps = dispatch => {
  return {
    firstQuestion: () =>
      dispatch({
        type: "FIRST_QUESTION"
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
