const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PaySampath = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  toatl_price: {
    type: String
  },
  contact_number: {
    type: Number
  },

  buying_date: {
    type: Date
  },
  card_no: {
    type: Number
  },

  cvc_no: {
    type: Number
  }
});
module.exports = mongoose.model("PaySampath", PaySampath);
