import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Buttons from "./subcomponents/Buttons";
import QuestionForReview from "./subcomponents/QuestionForReview";

class Review extends Component {
  componentDidMount() {
    this.props.sortingQuestion();
  }
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-11 m-auto">
            <div className="row">
              {this.props.questions.map(question => (
                <div key={question.id} className="col-md-4">
                  <QuestionForReview
                    selected={question.selected}
                    questionTypeId={question.questionTypeId}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Buttons />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sortingQuestion: () =>
      dispatch({
        type: "SORTING_QUESTION"
      })
  };
};

const mapStateToProps = state => {
  return {
    questions: state.quizzes.questions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);
