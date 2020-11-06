const express = require('express');
const router = express.Router()
const Product = require('../models/product.js')




// POST create
router.post('/products',  async(req, res) => {
  try {

    let product = new Product()
    product.owner = req.body.ownerID
    product.category = req.body.categoryID
    product.title = req.body.title
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
    const products = await Product.find()
    .populate("owner category").exec()
    
    res.json({
      success: true,
      products: products
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
      _id: req.params.id
    }).populate('owner category').exec()
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



router.get('/best/products/', (req, res) => {
  Product.find({
        isBestProduct: true
    },
        function (err, product) {
            if (err) {
                res.send(err)
            }
            console.log('data', product)
            res.json(product)
        }).limit(8)
})

router.get('/top/products/', (req, res) => {
  Product.find({
        isTopProduct: true
    },
        function (err, product) {
            if (err) {
                res.send(err)
            }
            console.log('data', product)
            res.json(product)
        }).limit(8)
})

router.get('/new/products/', (req, res) => {
  Product.find({
        isNewProduct: true
    },
        function (err, product) {
            if (err) {
                res.send(err)
            }
            console.log('data', product)
            res.json(product)
        }).limit(8)
})

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