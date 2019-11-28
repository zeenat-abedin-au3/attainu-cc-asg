import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Quiz from "./Quiz";
import Review from "./Review";
import Result from "./Result";

const App = () => {
  return (
    <div className="container py-3 h-100">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/quiz/review" component={Review} />
        <Route exact path="/quiz/result" component={Result} />
      </Switch>
    </div>
  );
};

export default App;
