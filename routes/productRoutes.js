const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

/*test*/
router.get("/test", (req, res) => {
  res.send({ msg: "Products test route." });
});

//! get all products */
router.get("/", (req, res) => {
  productModel
    .find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => console.log(err));
});

//! post a product */
router.post("/", (req, res) => {
  const { name, description, image, price, category, rate } = req.body;

  const newProduct = new productModel({
    name,
    description,
    image,
    price,
    category,
    rate
  });

  newProduct
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => console.log(err));
});

//! post a product_id in the wishlist */
router.post("/wishlist/:product_id", (req, res) => {
  userModel
    .findOneAndUpdate(
      { _id: "5e0b35b81c9d44000064a11b" },
      { $push: { wishlist: req.params.product_id } }
    )
    .then(data => res.json(data))
    .catch(err => res.status(err).json({ success: false }));
});

//! post a product_id in the productlist */
router.post("/cart/:product_id", (req, res) => {
  userModel
    .findOneAndUpdate(
      { _id: "5e0b35b81c9d44000064a11b" },
      { $push: { productlist: req.params.product_id } }
    )
    .then(data => res.json(data))
    .catch(err => res.status(err).json({ success: false }));
});

//! get products by product_id's for the wishlist*/
router.get("/wishlist/:user_id", (req, res) => {
  console.log("get user itin", req.params.user_id);

  userModel.findOne({ _id: req.params.user_id }).then(user => {
    if (user) {
      console.log("get user", user);
      productModel
        .find({
          _id: { $in: user.wishlist }
        })
        .then(data => {
          res.send(data);
        })
        .catch(err => console.log(err));
    }
  });
});

//! get products by product_id's for the personal cart*/
router.get("/cart/:user_id", (req, res) => {
  console.log("get user itin", req.params.user_id);

  userModel.findOne({ _id: req.params.user_id }).then(user => {
    if (user) {
      console.log("get user", user);
      productModel
        .find({
          _id: { $in: user.productlist }
        })
        .then(data => {
          res.send(data);
        })
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
