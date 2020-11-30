const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
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

// load env
dotenv.config({path: './config/.env'});


mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected DB!");
    }
  }
);


const port = process.env.PORT || 8000;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server runnig in ${process.env.NODE_ENV} mode on port ${port}`);
  }
});