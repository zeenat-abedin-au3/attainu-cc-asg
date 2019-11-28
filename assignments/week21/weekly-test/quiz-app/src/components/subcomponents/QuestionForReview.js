import React from "react";

const QuestionForReview = props => {
  const { questionTypeId, selected } = props;
  return (
    <div
      className={`card review-card mb-2 ${
        selected !== null ? "answered" : "review-not-ans"
      }`}
    >
      <p className="lead text-center">
        {questionTypeId}. {selected !== null ? "Answered" : "Not Answered"}
      </p>
    </div>
  );
};

export default QuestionForReview;
