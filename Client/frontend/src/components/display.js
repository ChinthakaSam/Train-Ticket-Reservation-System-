import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TrainSchedule = props => (
  <tr>
    <td>{props.newSchedule.train_code}</td>
    <td>{props.newSchedule.train_route}</td>
    <td>{props.newSchedule.departure_time}</td>
    <td>{props.newSchedule.arrival_time}</td>
    <td>{props.newSchedule.ticket_price}</td>
    <td>
      <Link to={"/book/" + props.newSchedule._id}>Reserve</Link>
    </td>
  </tr>
);

class DisplayingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { ticketDB: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/ticketDB/schedule/")
      .then(response => {
        this.setState({ ticketDB: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  displayList() {
    return this.state.ticketDB.map(function(currentSchedule, i) {
      return <TrainSchedule newSchedule={currentSchedule} key={i} />;
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
          Train Schedule
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
                <th>Train Route</th>
                <th>Departure Time</th>
                <th>Arrival Time To Destination</th>
                <th>Ticket Price Per Person (Rs)</th>
                <th>Reserve Tickets</th>
              </tr>
            </thead>
            <tbody>{this.displayList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DisplayingPage;
