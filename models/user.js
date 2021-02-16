const mongoose = require('mongoose');

const model = mongoose.model;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  addedProducts: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }],
  email: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

module.exports = model('User', userSchema);
