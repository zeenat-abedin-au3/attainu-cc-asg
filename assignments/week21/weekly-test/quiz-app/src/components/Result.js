import React, { Component } from "react";
import { connect } from "react-redux";
import ResultCard from "./subcomponents/ResultCard";

class Result extends Component {
  componentDidMount() {
    this.props.sortingQuestion();
  }

  handleClick = () => {
    this.props.restartQuiz();
    this.props.history.push("/quiz");
  };

  render() {
    return (
      <div className="row">
        <div className="col-11 m-auto">
          {this.props.questions.map(question => (
            <ResultCard
              options={question.options}
              givenAnswers={question.givenAnswers}
              selected={question.selected}
              name={question.name}
              questionTypeId={question.questionTypeId}
              key={question.id}
            />
          ))}
        </div>
        <div className="col-11 m-auto text-center">
          <button className="btn btn-danger" onClick={this.handleClick}>
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sortingQuestion: () =>
      dispatch({
        type: "SORTING_QUESTION"
      }),
    restartQuiz: () =>
      dispatch({
        type: "RESTART_QUIZ"
      })
  };
};

const mapStateToProps = state => {
  return {
    questions: state.quizzes.questions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
