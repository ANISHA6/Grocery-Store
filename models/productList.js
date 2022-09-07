const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productInfo: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantityAvailable: {
    type: Number,
    required: true,
  },
});

//with the help of schema creating a new collections
// Telling mongoose that , this is model
const Product = new mongoose.model("Product", productSchema);

// Now export it
module.exports = Product;
