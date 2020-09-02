import React, { Component } from "react";
import axios from "axios";

class BookingPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeTrainCode = this.onChangeTrainCode.bind(this);
    this.onChangeTrainRoute = this.onChangeTrainRoute.bind(this);
    this.onChangeDepartureTime = this.onChangeDepartureTime.bind(this);
    this.onChangeArrivalTime = this.onChangeArrivalTime.bind(this);
    this.onChangeTicketPrice = this.onChangeTicketPrice.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeNoPerson = this.onChangeNoPerson.bind(this);
    this.onChangePayMethod = this.onChangePayMethod.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      train_code: "",
      train_route: "",
      departure_time: "",
      arrival_time: "",
      ticket_price: "",
      date: "",
      numberOf_person: "",
      payment_method: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/ticketDB/schedule/" + this.props.match.params.id
      )
      .then(response => {
        this.setState({
          train_code: response.data.train_code,
          train_route: response.data.train_route,
          departure_time: response.data.departure_time,
          arrival_time: response.data.arrival_time,
          ticket_price: response.data.ticket_price
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeTrainCode(e) {
    this.setState({
      train_code: e.target.value
    });
  }
  onChangeTrainRoute(e) {
    this.setState({
      train_route: e.target.value
    });
  }

  onChangeDepartureTime(e) {
    this.setState({
      departure_time: e.target.value
    });
  }

  onChangeArrivalTime(e) {
    this.setState({
      arrival_time: e.target.value
    });
  }

  onChangeTicketPrice(e) {
    this.setState({
      ticket_price: e.target.value
    });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value
    });
  }

  onChangeNoPerson(e) {
    this.setState({
      numberOf_person: e.target.value
    });
  }

  onChangePayMethod(e) {
    this.setState({
      payment_method: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted: `);
    console.log(`Code: ${this.state.train_code}`);
    console.log(`Route: ${this.state.train_route} `);
    console.log(`Dep Time: ${this.state.departure_time}`);
    console.log(`Arr time: ${this.state.arrival_time}`);
    console.log(`Price: ${this.state.ticket_price} `);
    console.log(`Date: ${this.state.date}`);
    console.log(`No person: ${this.state.numberOf_person}`);
    console.log(`Pay Method: ${this.state.payment_method}`);

    const newReserve = {
      train_code: this.state.train_code,
      train_route: this.state.train_route,
      departure_time: this.state.departure_time,
      arrival_time: this.state.arrival_time,
      ticket_price: this.state.ticket_price,
      date: this.state.date,
      numberOf_person: this.state.numberOf_person,
      payment_method: this.state.payment_method
    };

    axios
      .post("http://localhost:4000/ticketDB/reserve/add", newReserve)
      .then(res => console.log(res.data));

    this.props.history.push("/pay");

    this.setState({
      train_code: "",
      train_route: "",
      departure_time: "",
      arrival_time: "",
      ticket_price: "",
      date: "",
      numberOf_person: "",
      payment_method: ""
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
          Reserve Tickets
        </h3>
        <div
          className="container"
          style={{
            marginTop: 20,
            backgroundColor: "#B4CFEC"
          }}
        >
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <lable>Train Code : </lable>
              <input
                type="text"
                className="form-control"
                value={this.state.train_code}
                onChange={this.onChangeTrainCode}
                readOnly
              />
            </div>
            <div className="form-group">
              <lable>Train Route : </lable>
              <input
                type="text"
                className="form-control"
                value={this.state.train_route}
                onChange={this.onChangeTrainRoute}
                readOnly
              />
            </div>
            <div className="form-group">
              <lable>Departure Time : </lable>
              <input
                type="text"
                className="form-control"
                value={this.state.departure_time}
                onChange={this.onChangeDepartureTime}
                readOnly
              />
            </div>
            <div className="form-group">
              <lable>Arrival Time To The Destination : </lable>
              <input
                type="text"
                className="form-control"
                value={this.state.arrival_time}
                onChange={this.onChangeArrivalTime}
                readOnly
              />
            </div>
            <div className="form-group">
              <lable>Ticket Price Per Person : (Rs) </lable>
              <input
                type="number"
                className="form-control"
                value={this.state.ticket_price}
                onChange={this.onChangeTicketPrice}
                readOnly
              />
            </div>
            <div className="form-group">
              <lable>Date : </lable>
              <input
                type="date"
                className="form-control"
                value={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>

            <div className="form-group">
              <lable>Number of Person : </lable>
              <input
                type="number"
                className="form-control"
                value={this.state.numberOf_person}
                onChange={this.onChangeNoPerson}
              />
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payOption"
                  id="dialogPay"
                  value="Dialog"
                  checked={this.state.payment_method === "Dialog"}
                  onChange={this.onChangePayMethod}
                />
                <lable className="form-check-label">Dialog</lable>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payOption"
                  id="sampathPay"
                  value="Sampath"
                  checked={this.state.payment_method === "Sampath"}
                  onChange={this.onChangePayMethod}
                />
                <lable className="form-check-label">Sampath</lable>
              </div>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="See Payment details"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BookingPage;
