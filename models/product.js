const mongoose = require('mongoose');

const model = mongoose.model;
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    currency: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    decimals: {
      type: Number,
      required: true
    }
  },
  picture: {
    type: String
  },
  condition: {
    type: String,
    required: true,
  },
  free_shipping: {
    type: Boolean,
    required: true
  },
  tags: [{
    type: String,
    required: true
  }],
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = model('Product', productSchema);
