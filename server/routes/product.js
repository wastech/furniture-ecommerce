const express = require('express');
const router = express.Router()
const Product = require('../models/product.js')
const Category = require("../models/Category.js");




// POST create
router.post('/products',  async(req, res) => {
  try {

    let product = new Product()
    product.owner = req.body.ownerID
    product.category = req.body.categoryID
    product.name = req.body.name
    product.description = req.body.description
    product.photo = req.body.photo
    product.price = req.body.price
    
    
    await product.save();

    res.json({
      status: true,
      msg: 'Successfuly create new Product!!'
    })

  } catch(err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})

// Get all product

router.get('/products', async (req, res) => {
  try {
  
    const products = await Product.find({})
      .sort("-created")
      .populate("owner")
      .populate("category")
      .exec();
    
    res.json({
      success: true,
      products: products,
    
    })

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})



// Get a single product


router.get('/products/:id', async (req, res) => {
  try {

    const product = await Product.findOne({
      _id: req.params.id,
    })
      .populate(" category")
      .populate("owner")
      .exec();
    res.json({
      success: true,
      product: product
    })
   

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})


router.get("/beds", (req, res, next) => {
  //Post.find( {'category' : '5e0295317e7b5c07d8f359a4'}) we can do it this way too
  Product.find()
    .where("category")
    .equals("5fc5650723c26e09246cb40f")
    .populate("category")
    .populate("owner")
    .sort({ created_at: -1 })
    .exec()
    .then((doc) => {
      res.status(200).json({
        count: doc.length,
        posts: doc,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/sofas", (req, res, next) => {
  //Post.find( {'category' : '5e0295317e7b5c07d8f359a4'}) we can do it this way too
  Product.find()
    .where("category")
    .equals("5fc5652623c26e09246cb412")
    .populate("category")
    .populate("owner")
    .sort({ created_at: -1 })
    .exec()
    .then((doc) => {
      res.status(200).json({
        count: doc.length,
        posts: doc,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});



router.get("/chairs", (req, res, next) => {
  //Post.find( {'category' : '5e0295317e7b5c07d8f359a4'}) we can do it this way too
  Product.find()
    .where("category")
    .equals("5fc5651b23c26e09246cb411")
    .populate("category")
    .populate("owner")
    .sort({ created_at: -1 })
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json({
        count: doc.length,
        posts: doc,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/tables", (req, res, next) => {
  //Post.find( {'category' : '5e0295317e7b5c07d8f359a4'}) we can do it this way too
  Product.find()
    .where("category")
    .equals("5fc5650f23c26e09246cb410")
    .populate("category")
    .populate( "owner")
    .sort({ created_at: -1 })
    .exec()
    .then((doc) => {
     
      res.status(200).json({
        count: doc.length,
        posts: doc,
      });
    })
    .catch((err) => {
     
      res.status(500).json({
        error: err,
      });
    });
});


//recent product
router.get("/recent/products", async (req, res) => {
  try {
    const product = await Product.find({})
      .sort("-created")
      .limit(4)
      .populate("category")
      .populate("owner")
      .exec();
    res.json({
      success: true,
      product: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
// category
//! matched category route

//? req.params { category: 'chairs' }
//? /api/matched/chairs
//? /api/matched/089023436134643350730846627384670346734867386

router.get("/matched/:categoryId", async (req, res) => {
  console.log("req.params", req.params);
  try {
    
    const product = await Product.find({

      category: req.params.categoryId
    })
      .populate(" category")
      .populate("owner")
      .exec();
    //console.log("hello", product);
    res.json({
      product: product,
    });
   
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


// Put

router.put('/products/:id', async (req, res) => {
  try {

    const product = await Product.findOneAndUpdate({
      _id: req.params.id},
      {
        $set: {
          title: req.body.title,
          price: req.body.price,
          category: req.body.categoryID,
          photo: req.file.location,
          description: req.body.description,
          
          owner: req.body.ownerID
        }
      },
      {
        upsert:true
      }
    
    )
    res.json({
      success: true,
      updatedProduct: product
    })

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})


// Delete

router.delete('/products/:id', async (req, res) => {
  try {

    const deletedProduct = await Product.findOneAndDelete({
      _id: req.params.id
    })
    if (deletedProduct) {
      res.json({
        success: true,
        message: 'Successfully deleted'
      })
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})




module.exports = router