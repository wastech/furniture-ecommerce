const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
//const User = require('./models/user')
const categoryRoutes = require("./routes/category");
const ownerRoutes = require("./routes/owner");
const productRoutes = require("./routes/product");
const authRoutes = require("./routes/user");
const addressRoutes = require("./routes/address")

const cors = require("cors");
const app = express();


app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



app.use("/api", categoryRoutes);
app.use("/api", ownerRoutes);
app.use("/api", authRoutes);
app.use("/api", productRoutes);
app.use("/api", addressRoutes);


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



app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("listenin on port", 3000);
  }
});