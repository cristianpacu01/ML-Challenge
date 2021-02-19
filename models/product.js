const mongoose = require('mongoose');

const model = mongoose.model;
const Schema = mongoose.Schema;

const productSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  condition: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  free_shipping: {
    type: Boolean,
    required: true
  },
  pictures: [{
    type: Schema.Types.ObjectId,
    ref: 'Image'
  }],
  price: {
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    decimals: {
      type: Number,
      required: true
    }
  },
  sold: {
    type: Number
  },
  tags: [{
    type: String,
    required: true
  }],
  title: {
    type: String,
    required: true
  }
});

module.exports = model('Product', productSchema);
