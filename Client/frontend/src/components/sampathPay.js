import React, { Component } from "react";
import axios from "axios";

class SampathPayementPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTotalPrice = this.onChangeTotalPrice.bind(this);
    this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
    this.onChangeBuyingDate = this.onChangeBuyingDate.bind(this);
    this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
    this.onChangeCVCNumber = this.onChangeCVCNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      total_price: "",
      contact_number: "",
      buying_date: "",
      card_no: "",
      cvc_no: ""
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

  onChangeBuyingDate(e) {
    this.setState({
      buying_date: e.target.value
    });
  }

  onChangeCardNumber(e) {
    this.setState({
      card_no: e.target.value
    });
  }

  onChangeCVCNumber(e) {
    this.setState({
      cvc_no: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newSampath = {
      name: this.state.name,
      email: this.state.email,
      total_price: this.state.total_price,
      contact_number: this.state.contact_number,
      buying_date: this.state.buying_date,
      card_no: this.state.card_no,
      cvc_no: this.state.cvc_no
    };

    axios
      .post("http://localhost:4000/ticketDB/paySampath/add", newSampath)
      .then(res => console.log(res.data));

    this.props.history.push("/end");

    this.setState({
      name: "",
      email: "",
      total_price: "",
      contact_number: "",
      buying_date: "",
      card_no: "",
      cvc_no: ""
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
          Sampath Payment Verification
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
              <lable>Buying Date : </lable>
              <input
                type="date"
                className="form-control"
                value={this.state.buying_date}
                onChange={this.onChangeBuyingDate}
              />
            </div>
            <div className="form-group">
              <lable>Card Number : </lable>
              <input
                type="number"
                className="form-control"
                value={this.state.card_no}
                onChange={this.onChangeCardNumber}
              />
            </div>
            <div className="form-group">
              <lable>CVC Number : </lable>
              <input
                type="number"
                className="form-control"
                value={this.state.cvc_no}
                onChange={this.onChangeCVCNumber}
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

export default SampathPayementPage;
