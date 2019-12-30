const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel");

/*test*/
router.get("/test", (req, res) => {
  res.send({ msg: "Products test route." });
});

/*get all products*/
router.get("/", (req, res) => {
  productModel
    .find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => console.log(err));
});

module.exports = router;
