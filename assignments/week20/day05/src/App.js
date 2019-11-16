import React from "react"
import ReactCalculator from "./calculator"


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ReactCalculator />

          </div>
        </div>
      </div>
    )
  }
}

export default App