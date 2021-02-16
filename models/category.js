const mongoose = require('mongoose');

const model = mongoose.model;
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  parentCategory: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
});

module.exports = model('Category', categorySchema);
