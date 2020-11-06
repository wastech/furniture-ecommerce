const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Owner",
    },
    title: String,
    description: String,
    photo: String,
    price: String,
    isBestProduct: Boolean,
    isTopProduct: Boolean,
    isNewProduct:Boolean
   
   
  }
  
);



let Model = mongoose.model("Product", ProductSchema);
module.exports = Model;