import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import MainPage from "./components/main";
import DisplayingPage from "./components/display";
import BookingPage from "./components/booking";
import SampathPayementPage from "./components/sampathPay";
import DialogPayementPage from "./components/dialogPay";
import PaymentPage from "./components/pay";
import FinishingPage from "./components/end";

import logo from "./logo.png";
import b2 from "./b2.jpg";

class App extends Component {
  render() {
    return (
      <Router>
        <div
          className="container"
          style={{
            backgroundImage: "url(" + b2 + ")",
            height: "750px",
            width: "1024px"
          }}
        >
          <nav
            className="navbar navbar-expand-xl navbar-light bg-success"
            style={{ marginTop: 10 }}
          >
            <a>
              <img
                src={logo}
                width="80"
                height="30"
                alt="Train Ticket Reservation App"
              />
            </a>
            <Link to="/" className="navbar-brand" style={{ fontSize: 35 }}>
              Train Ticket Reservation App
            </Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/display" className="nav-link">
                    Train Schedule
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={MainPage} />
          <Route path="/display" component={DisplayingPage} />
          <Route path="/book/:id" component={BookingPage} />
          <Route path="/SampathPay/:id" component={SampathPayementPage} />
          <Route path="/DialogPay/:id" component={DialogPayementPage} />
          <Route path="/pay" component={PaymentPage} />
          <Route path="/end" component={FinishingPage} />
        </div>
      </Router>
    );
  }
}

export default App;
