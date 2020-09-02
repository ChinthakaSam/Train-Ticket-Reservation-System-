const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TicketReserve = new Schema({
  train_code: {
    type: String
  },
  train_route: {
    type: String
  },
  departure_time: {
    type: String
  },
  arrival_time: {
    type: String
  },
  ticket_price: {
    type: Number
  },
  date: {
    type: Date
  },
  numberOf_person: {
    type: Number
  },
  payment_method: {
    type: String
  }
});
module.exports = mongoose.model("TicketReserve", TicketReserve);
