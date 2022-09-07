const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  productList: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  paymentInfo: {
    type: String,
    required: true,
  },
});

//with the help of schema creating a new collections
// Telling mongoose that , this is model
const Order = new mongoose.model("Order", orderSchema);

// Now export it
module.exports = Order;
