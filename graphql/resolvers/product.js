const Product = require('../../models/product');
const { transformProduct } = require('./merge');

module.exports = ({
  createProduct: async ({ productInput }) => {
    try {
      const product = new Product({
        ...productInput
      });

      const savedProduct = await product.save();

      return transformProduct(savedProduct);
    } catch (err) {
      throw err;
    }
  },
  getProducts: async () => {
    try {
      const products = await Product.find();

      return products.map(transformProduct);
    } catch (err) {
      throw err;
    }
  },
  getProductById: async ({ productId }) => {
    try {
      const product = await Product.findById(productId);

      return transformProduct(product);
    } catch (err){
      throw err;
    }
  },
  getProductsByTag: async ({ keywords }) => {
    try {
      const products = await Product.find({
        tags: {
          "$in" : keywords.split(' ')
        }
      });

      return products.map(transformProduct);
    } catch (err) {
      throw err;
    }
  }
});
