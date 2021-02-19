const { Product } = require('../../models');
const { transformProduct } = require('./merge');

module.exports = ({
  createProduct: async ({ productInput }) => {
    try {
      const product = new Product({
        ...productInput,
        sold: Math.floor(Math.random()*400)
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
