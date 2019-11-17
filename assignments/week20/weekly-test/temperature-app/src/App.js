import React from "react";
import Temperature from "./Temperature";


const App = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 m-auto">
          <div className="card">
            <div className="card-header">
              <p className="lead text-center">Temperature Converter</p>
            </div>
            <div className="card-body">
              <Temperature />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


