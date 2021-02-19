const mongoose = require('mongoose');

const model = mongoose.model;
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  alt: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  img: {
    data: Buffer,
    contentType: String
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = model('Image', imageSchema);
