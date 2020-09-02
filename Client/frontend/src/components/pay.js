import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TicketReserve = props => (
  <tr>
    <td>{props.newReserve.train_code}</td>
    <td>{props.newReserve.date}</td>
    <td>{props.newReserve.departure_time}</td>
    <td>{props.newReserve.numberOf_person}</td>
    <td>{props.newReserve.payment_method}</td>
    <td>
      <div align="center" className="btn btn-danger">
        <Link to={"/SampathPay/" + props.newReserve._id}>Sampth Payment</Link>
      </div>
      <div align="center" className="btn btn-warning">
        <Link to={"/DialogPay/" + props.newReserve._id}>Dialog Payment</Link>
      </div>
    </td>
  </tr>
);

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.state = { ticketDB: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/ticketDB/reserve/")
      .then(response => {
        this.setState({ ticketDB: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:4000/ticketDB/reserve/")
      .then(response => {
        this.setState({ ticketDB: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  displayList() {
    return this.state.ticketDB.map(function(currentReserve, i) {
      return <TicketReserve newReserve={currentReserve} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3
          align="center"
          className="font-weight-bolder text-danger"
          style={{ marginTop: 20 }}
        >
          Your Resrvation details
        </h3>
        <div
          className="container"
          style={{
            marginTop: 20,
            backgroundColor: "#B4CFEC"
          }}
        >
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Train Code</th>
                <th>Date</th>
                <th>Departure Time</th>
                <th>Nomber of Person</th>
                <th>Payment Method</th>
                <th>Choose Correct Payment Link</th>
              </tr>
            </thead>
            <tbody>{this.displayList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PaymentPage;
