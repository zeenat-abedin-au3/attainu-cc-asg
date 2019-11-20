import React from "react";

const About = () => (
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center">About Us</h1>
        <hr />
      </div>
    </div>

    <div className="container my-3">
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="card mb-3" style={{ maxWidth: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">CEO</h5>
              <p className="card-text">
                The CEO holds a position on the board of directors and the title
                of president.The CEO also has the role of maintaining continuous
                awareness of competitors, markets, consumers, industry
                developments and quality standards.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img
            style={{ height: "150px", width: "150px" }}
            src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1412243/580/386/m1/fpnw/wm0/lawyer-avatar-flat-icon-01-.jpg?1467280299&s=534314141834ef9547a787979e939f90"
            className="Card-img"
            alt="About"
          />
        </div>
      </div>
    </div>

    <div className="container my-3">
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="card mb-3" style={{ maxWidth: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">CTO</h5>
              <p className="card-text">
                The CTO is focused on technical issues in the company.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img
            style={{ height: "150px", width: "150px" }}
            src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1412243/580/386/m1/fpnw/wm0/lawyer-avatar-flat-icon-01-.jpg?1467280299&s=534314141834ef9547a787979e939f90"
            className="Card-img"
            alt="About"
          />
        </div>
      </div>
    </div>

    <div className="container my-3">
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="card mb-3" style={{ maxWidth: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">COO</h5>
              <p className="card-text">
                The COO is responsible for managing the company's day-to-day
                operations and reporting them to the chief executive officer
                (CEO).
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img
            style={{ height: "150px", width: "150px" }}
            src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1412243/580/386/m1/fpnw/wm0/lawyer-avatar-flat-icon-01-.jpg?1467280299&s=534314141834ef9547a787979e939f90"
            className="Card-img"
            alt="About"
          />
        </div>
      </div>
    </div>
  </div>
);

export default About;
