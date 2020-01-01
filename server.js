require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require("body-parser");
const cors = require("cors");

const db = process.env.MONGO_URI;
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

app.use("/products", require("./routes/productRoutes"));
app.use("/users", require("./routes/userRoutes"));
