import React, { Component } from "react";

import b1 from "../b1.jpg";
import b3 from "../b3.jpg";
import b4 from "../b4.jpg";
import b5 from "../b5.jpg";

class MainPage extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-md">
            <img className="d-block w-100" src={b1} />
          </div>
          <div className="col-md">
            <img className="d-block w-100" src={b5} />
          </div>
          <div className="w-100" />
          <div className="col-md">
            <img className="d-block w-100" src={b3} />
          </div>
          <div className="col-md">
            <img className="d-block w-100" src={b4} />
          </div>
        </div>
        <div
          className="container"
          style={{
            marginTop: 20,
            backgroundColor: "#B4CFEC",
            borderRadius: "25px"
          }}
        >
          <h3 align="center">Book with us and book it out of here!</h3>

          <p
            align="center"
            className="font-weight-bolder font-italic text-danger"
          >
            Travel with excellence
          </p>
        </div>
      </div>
    );
  }
}

export default MainPage;
