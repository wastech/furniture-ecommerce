const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Owner",
  },
  name: String,
  description: String,
  photo: String,
  price: String,
  created: {
    type: Date,
    default: Date.now,
  },
});



let Model = mongoose.model("Product", ProductSchema);
module.exports = Model;