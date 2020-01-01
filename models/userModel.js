const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
    unique: false
  },
  avatar: {
    type: String,
    required: false
  },
  wishlist: {
    type: Array
  },
  productlist: {
    type: Array
  }
});

module.exports = mongoose.model("user", userSchema);
