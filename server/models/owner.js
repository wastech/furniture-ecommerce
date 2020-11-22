const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const OwnerSchema = new Schema({

  name: {
    type: String,
    unique: true,
    required: true,
  },
  about: String,
  photo: String,
});

module.exports = mongoose.model('Owner',OwnerSchema)