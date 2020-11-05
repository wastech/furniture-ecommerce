const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
//const User = require('./models/user')
const cors = require("cors");
const app = express();

//app.use(morgan('combined'))
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect(" mongodb://localhost:27017/furniture",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected DB!");
    }
  }
);

/**
 * route
 *
 *
 */



app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("listenin on port", 3000);
  }
});