import React, { Component } from "react";
import axios from "axios";

class FinishingPage extends Component {
  render() {
    return (
      <div
        className="container"
        style={{
          marginTop: 20,
          backgroundColor: "#B4CFEC",
          borderRadius: "25px"
        }}
      >
        <h3 align="center">Thank you for joining with us..</h3>

        <p
          align="center"
          className="font-weight-bolder font-italic text-danger"
        >
          Your payment verification email and verifiaction SMS has been sent to
          you..
        </p>
      </div>
    );
  }
}

export default FinishingPage;
