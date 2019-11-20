import React from "react";

const Contact = () => (
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center">Contact Us</h1>
        <hr />
      </div>
    </div>
    <div className="container">
      <p>
        Address: 13A Govt. Place East, Opposite Raj Bhawan, Kolkata: 69, WB,
        INDIA
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14746.60025801635!2d88.29476639999999!3d22.47978075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1562838491484!5m2!1sen!2sin"
        frameBorder="0"
        style={{ border: "0", width: "30", height: "100%" }}
        allowFullScreen
        title="Address"
      ></iframe>
    </div>
  </div>
);

export default Contact;
