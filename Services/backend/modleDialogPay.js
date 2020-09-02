const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PayDialog = new Schema({
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
  pin_number: {
    type: Number
  },
  buying_date: {
    type: Date
  }
});
module.exports = mongoose.model("PayDialog", PayDialog);
