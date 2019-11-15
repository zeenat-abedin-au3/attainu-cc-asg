import React from "react"
import LoginForm from "./LoginForm"


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <LoginForm />

          </div>
        </div>
      </div>
    )
  }
}

export default App