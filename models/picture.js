const mongoose = require('mongoose');

const model = mongoose.model;
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  alt: {
    type: String
  },
  img: {
    data: Buffer,
    contentType: String
  }
});

module.exports = model('Image', imageSchema);
