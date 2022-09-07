const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

//with the help of schema creating a new collections
// Telling mongoose that , this is model
const Customer = new mongoose.model("Customer", customerSchema);

// Now export it
module.exports = Customer;
