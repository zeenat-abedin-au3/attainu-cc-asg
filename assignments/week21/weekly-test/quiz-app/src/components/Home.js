import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-10 m-auto">
        <h1 className="text-center">Play Quiz</h1>
        <div className="text-center">
          <Link className="btn btn-info" to="/quiz">
            Play Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
