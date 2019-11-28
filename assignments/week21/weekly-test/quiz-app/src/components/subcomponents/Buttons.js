import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Buttons extends Component {
  handleClick = () => {
    const confirmation = window.confirm("Are you sure ?");
    if (confirmation) {
      this.props.history.push("/quiz/result");
    }
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-5 m-auto">
          <div className="card">
            <div className="card-body text-center">
              <div className="btn-group">
                <Link to="/quiz" className="btn btn-info">
                  Quiz
                </Link>
                <Link to="/quiz/review" className="btn btn-secondary mx-2">
                  Review
                </Link>
                <button className="btn btn-primary" onClick={this.handleClick}>
                  Submit Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Buttons);
