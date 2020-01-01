const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");

//! get all users */
router.get("/", (req, res) => {
  userModel
    .find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => console.log(err));
});

module.exports = router;
