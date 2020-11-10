const router = require("express").Router();

const Category = require("../models/category");
const Product = require("../models/product");


//Post

router.post("/categories", async (req, res) => {
  try {
    const category = new Category();
    category.type = req.body.type;

    await category.save();

    res.json({
      success: true,
      message: "Successfully category create!!",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//Get
router.get("/categories", async (req, res) => {
  try {
    let categories = await Category.find();
    res.json({
      success: true,
      categories: categories,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

// categories

router.get('/categories/:category', async (req, res) => {
  Category.findOne({ type: req.params.type }, (err, category) => {
    if (err) res.status(500).json({ success: false, message: "Category not found" });
    if (category) {
        Product.find({ category: category._id })
            .populate('category')
            .lean()
            .exec((err, products) => {
                if(err) res.status(500).json({ success: false, message: "product/s not found" });
                res.json(products);
            })
    }
    else {
        res.status(404).json({ success: false, message: "Products not found" });
    }
});
})
// Delete

router.delete('/categories/:id', async (req, res) => {
  try {

    const deletedProduct = await Category.findOneAndDelete({
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

module.exports = router;