import React from "react";

import Question from "./Question";
import Buttons from "./subcomponents/Buttons";

const Quiz = () => {
  return (
    <div className="row">
      <div className="col-md-10 m-auto">
        <Question />
      </div>
      <div className="col-md-10 m-auto">
        <Buttons />
      </div>
    </div>
  );
};

export default Quiz;
