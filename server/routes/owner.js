const router = require('express').Router()
const Owner = require('../models/owner')


  //name: String,
  //about: String,
  //photo: String,

router.post('/owners',  async (req, res) => {
  try {
    let owner = new Owner()
    owner.name = req.body.name
    owner.about = req.body.about
    owner.photo = req.body.photo
    

    await owner.save()
    res.json({
      success: true,
      message: 'Successfully create new Owner!!'
    })
  } catch(err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
 
})


router.get('/owners', async (req, res) => {
  try {
    let owners = await Owner.find()
    res.json({
      owners: owners
    })
  } catch(err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})

module.exports = router