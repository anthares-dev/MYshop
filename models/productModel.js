const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
    unique: true
  },
  description: {
    type: String
  },
  images: {
    type: Array,
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
