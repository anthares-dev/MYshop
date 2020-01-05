const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

//https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb

/*test*/
router.get("/test", (req, res) => {
  res.send({ msg: "Products test route." });
});

//! Get all products */
router.get("/", (req, res) => {
  productModel
    .find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => console.log(err));
});

//! Create a product */
router.post("/create", (req, res) => {
  const { title, description, images, price, category, rate } = req.body;

  const newProduct = new productModel({
    title,
    description,
    images,
    price,
    category,
    rate
  });

  newProduct
    .save()
    .then(res.send("Product created successfully."))
    .catch(err => res.send(err).json({ success: false }));
});

//! Read a product */
router.get("/:product_id/read", (req, res) => {
  productModel
    .findById(req.params.product_id)
    .then(data => res.json(data))
    .catch(err => res.status(err).json({ success: false }));
});

//! Update a product */
router.put("/:product_id/update", (req, res) => {
  productModel
    .findByIdAndUpdate(req.params.product_id, { $set: req.body })
    .then(res.json("Product udpated."))
    .catch(err => res.status(err).json({ success: false }));
});

//! Delete a product */
router.delete("/:product_id/delete", (req, res) => {
  productModel
    .findByIdAndRemove(req.params.product_id)
    .then(res.json("Product deleted."))
    .catch(err => res.status(err).json({ success: false }));
});

//! add a product_id in the wishlist */
router.post("/wishlist/:product_id", (req, res) => {
  userModel
    .findOneAndUpdate(
      { _id: "5e1205a01c9d440000ebf432" },
      { $push: { wishlist: req.params.product_id } }
    )
    .then(data => res.json(data))
    .catch(err => res.status(err).json({ success: false }));
});

//! add a unique product_id in the user productlist */
router.post("/cart/:product_id", (req, res) => {
  userModel
    .findOneAndUpdate(
      { _id: "5e1205a01c9d440000ebf432" },
      { $push: { productlist: req.params.product_id } }
    )
    .then(data => res.json(data))
    .catch(err => res.status(err).json({ success: false }));
});

//! update productlist, deleting a unique product_id in the user productlist */
router.put("/cart/:product_id/update", (req, res) => {
  userModel
    .findOneAndUpdate(
      { _id: "5e1205a01c9d440000ebf432" },
      { $pull: { productlist: req.params.product_id } }
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
