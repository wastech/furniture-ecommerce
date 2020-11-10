const router = require("express").Router();
const Address = require("../models/address");
const User = require("../models/user");
const verifyToken = require("../middlewares/verify-token");
const axios = require("axios");


/**POST CREATE */
router.post("/addresses", verifyToken, async (req, res) => {
  try {
    let address = new Address();
    address.user = req.decoded._id;
    address.country = req.body.country;
    address.fullName = req.body.fullName;
    address.streetAddress = req.body.streetAddress;
    address.city = req.body.city;
    address.state = req.body.state;
    address.zipCode = req.body.zipCode;
    address.phoneNumber = req.body.phoneNumber;
    address.deliverInstructions = req.body.deliverInstructions;
    address.securityCode = req.body.securityCode;

    await address.save();

    res.json({
      status: true,
      msg: "Successfuly create an address!!",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/**GET ALL Addresses */

router.get("/addresses", verifyToken, async (req, res) => {
  try {
    let addresses = await Address.find({
      user: req.decoded._id,
    });

    res.json({
      success: true,
      addresses: addresses,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//Get API

router.get("/addresses/:id", verifyToken, async (req, res) => {
  try {
    const address = await Address.findOne({
      _id: req.params.id,
    });
    res.json({
      success: true,
      address: address,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// Get countries data API
router.get("/countries", async (req, res) => {
  try {
    let response = await axios.get("https://restcountries.eu/rest/v2/all");
    console.log(response);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/**
 * 
 * user: {type: Schema.Types.ObjectId, ref: 'User'},
 country: String,
 fullName: String,
 streetAddress: String,
 city: String,
 state: String,
 zipCode: Number,
 phoneNumber: String,
 deliverInstructions: String,
 securityCode: String
})
 */

// Update Address/:id
router.put("/addresses/:id", verifyToken, async (req, res) => {
  try {
    let foundAddress = await Address.findOne({ _id: req.params.id });
    if (foundAddress) {
      if (req.body.coundtry) foundAddress.coundtry = req.body.coundtry;
      if (req.body.fullName) foundAddress.fullName = req.body.fullName;
      if (req.body.streetAddress) foundAddress.streetAddress = req.body.streetAddress;
      if (req.body.city) foundAddress.city = req.body.city;
      if (req.body.state) foundAddress.state = req.body.state;
      if (req.body.zipCode) foundAddress.zipCode = req.body.zipCode;
      if (req.body.phoneNumber) foundAddress.phoneNumber = req.body.phoneNumber;
      if (req.body.deliverInstructions)
        foundAddress.deliverInstructions = req.body.deliverInstructions;
      if (req.body.securityCode)
        foundAddress.securityCode = req.body.securityCode;

      await foundAddress.save();

      res.json({
        success: true,
        message: "succesfully updated the address",
      });
    }
    console.log("user", user);
  } catch (err) {
    console.log("error", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// delete

router.delete("/addresses/:id", verifyToken, async (req, res) => {
  try {
    let deletedAddress = await Address.remove({
      user: req.decoded._id,
      _id: req.params.id,
    });
    if (deletedAddress) {
      res.json({
        success: true,
        message: "successfully deleted the address",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

router.put("/addresses/set/default", verifyToken, async (req, res) => {
  try {
    const updatedAddressUser = await User.findOneAndUpdate(
      {
        _id: req.decoded._id,
      },
      {
        $set: { address: req.body.id },
      }
    );
    if (updatedAddressUser) {
      res.json({
        success: true,
        message: "Successfull created the addresss",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;