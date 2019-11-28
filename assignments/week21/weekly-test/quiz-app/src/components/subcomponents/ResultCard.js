import React from "react";

const ResultCard = ({
  name,
  questionTypeId,
  options,
  selected,
  givenAnswers
}) => {
  return (
    <div className={`card my-2 ${givenAnswers ? "correct" : "wrong"}`}>
      <h5 className="card-header">
        {questionTypeId}. {name}
      </h5>
      <div className="card-body">
        {options.map(option => (
          <h5 className="d-inline-block" key={option.id}>
            <span
              className={`badge border mx-1 ${
                option.id === selected ? "badge-secondary" : ""
              }`}
            >
              {option.name}
            </span>
          </h5>
        ))}
      </div>
      <div className="card-footer">
        <p
          className={`font-weight-bold ${
            givenAnswers ? "f-correct" : "f-wrong"
          }`}
        >
          {givenAnswers ? "Your Answer is correct" : "You Answer is wrong."}
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
