const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    unique: false
  },
  description: {
    type: String
  },
  image: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: false
  },
  category: {
    type: String,
    required: false
  },
  rate: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model("product", productSchema);
