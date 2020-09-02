const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TrainSchedule = new Schema({
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
  }
});
module.exports = mongoose.model("TrainSchedule", TrainSchedule);
