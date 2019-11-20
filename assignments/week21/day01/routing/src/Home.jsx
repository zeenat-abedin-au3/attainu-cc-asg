import React from "react";

const Home = () => (
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center">AwesomeCompany.com</h1>
        <hr />
      </div>
    </div>
    <div className="card-deck">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">On Time Delivery</h5>
          <hr />
          <p className="card-text">We deliver project on time.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">24x7 Customer Support</h5>
          <hr />
          <p className="card-text">
            We provide customer support 24×7 over Email, Chat & Phone.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Marketing Support & Guidance</h5>
          <hr />
          <p className="card-text">
            We educate about technology to our client to achieve their goals.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Annual Maintenance</h5>
          <hr />
          <p className="card-text">
            We Provide AMC Services to Clients to handle Files Securely.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
