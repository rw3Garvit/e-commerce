let mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  productPrice: {
    type: Number,
  },
  productDesc: {
    type: String,
  },
});

let product = mongoose.model("productSchema", productSchema);

module.exports = product;
