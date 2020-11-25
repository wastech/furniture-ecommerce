const router = require("express").Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verify-token");

/**
 *
 * Signup Route
 */

router.post("/auth/signup", async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.json({
      success: false,
      message: "signup successfull",
    });
  } else {
    try {
      let newUser = new User();
      newUser.name = req.body.name;
      newUser.email = req.body.email;
      newUser.password = req.body.password;
      await newUser.save();

      let token = jwt.sign(newUser.toJSON(), "mysecret", {
        expiresIn: 604800, // 1week
      });

      res.json({
        success: true,
        token: token,
        user: newUser,
        message: "Succesfull",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
});

/**Profile Route */


router.get("/auth/user", verifyToken, async (req, res) => {
  try {
    let foundUser = await User.findOne({ _id: req.decoded._id }).populate(
      'address'
    );
    if (foundUser) {
      res.json({
        success: true,
        user: foundUser,
        
      });
      console.log(foundUser);
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// Update  User Profile
router.put("/auth/user", verifyToken, async (req, res) => {
  try {
    let foundUser = await User.findOne({ _id: req.decoded._id });
    if (foundUser) {
      if (req.body.name) foundUser.name = req.body.name;
      if (req.body.email) foundUser.email = req.body.email;
      if (req.body.password) foundUser.password = req.body.password;

      await foundUser.save();

      res.json({
        success: true,
        message: "successfull",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/**Login Route */
router.post("/auth/login", async (req, res) => {
  try {
    let foundUser = await User.findOne({ email: req.body.email });
    if (!foundUser) {
      res.status(403).json({
        success: false,
        message: "err",
      });
    } else {
      if (foundUser.comparePassword(req.body.password)) {
        let token = jwt.sign(foundUser.toJSON(), "mysecret", {
          expiresIn: 604800,
        });
        res.json({
          success: true,
          token: token,
          user: foundUser,
        });
      } else {
        res.status(403).json({
          success: false,
          message: "err",
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;