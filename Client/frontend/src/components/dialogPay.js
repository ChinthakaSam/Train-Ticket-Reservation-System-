import React, { Component } from "react";
import axios from "axios";

class DialogPayementPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTotalPrice = this.onChangeTotalPrice.bind(this);
    this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
    this.onChangePin = this.onChangePin.bind(this);
    this.onChangeBuyingDate = this.onChangeBuyingDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      total_price: "",
      contact_number: "",
      pin_number: "",
      buying_date: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/ticketDB/reserve/" + this.props.match.params.id
      )
      .then(response => {
        this.setState({
          numberOf_person: response.data.numberOf_person,
          ticket_price: response.data.ticket_price
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeTotalPrice(e) {
    this.setState({
      total_price: e.target.value
    });
  }

  onChangeContactNumber(e) {
    this.setState({
      contact_number: e.target.value
    });
  }

  onChangePin(e) {
    this.setState({
      pin_number: e.target.value
    });
  }

  onChangeBuyingDate(e) {
    this.setState({
      buying_date: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newDialog = {
      name: this.state.name,
      email: this.state.email,
      total_price: this.state.total_price,
      contact_number: this.state.contact_number,
      pin_number: this.state.pin_number,
      buying_date: this.state.buying_date
    };

    axios
      .post("http://localhost:4000/ticketDB/payDialog/add", newDialog)
      .then(res => console.log(res.data));

    this.props.history.push("/end");

    this.setState({
      name: "",
      email: "",
      total_price: "",
      contact_number: "",
      pin_number: "",
      buying_date: ""
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
          Dialog Payment Verification
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
              <lable>Name : </lable>
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>
            <div className="form-group">
              <lable>Email : </lable>
              <input
                type="text"
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
            <div className="form-group">
              <lable>Total Price : (Rs)</lable>
              <input
                type="number"
                className="form-control"
                value={this.state.numberOf_person * this.state.ticket_price}
                onChange={this.onChangeTotalPrice}
                readOnly
              />
            </div>
            <div className="form-group">
              <lable>Contact Number : </lable>
              <input
                type="number"
                className="form-control"
                value={this.state.contact_number}
                onChange={this.onChangeContactNumber}
              />
            </div>
            <div className="form-group">
              <lable>PIN number : </lable>
              <input
                type="number"
                className="form-control"
                value={this.state.pin_number}
                onChange={this.onChangePin}
              />
            </div>
            <div className="form-group">
              <lable>Buying Date : </lable>
              <input
                type="date"
                className="form-control"
                value={this.state.buying_date}
                onChange={this.onChangeBuyingDate}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Confirm Payment"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default DialogPayementPage;
