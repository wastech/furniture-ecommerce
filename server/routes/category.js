const router = require("express").Router();

const Category = require("../models/category");

//Post

router.post("/categories", async (req, res) => {
  try {
    const category = new Category();
    category.title = req.body.title;

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

// Delete

router.delete("/categories/:id", async (req, res) => {
  try {
    const deletedProduct = await Category.findOneAndDelete({
      _id: req.params.id,
    });
    if (deletedProduct) {
      res.json({
        success: true,
        message: "Successfully deleted",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
