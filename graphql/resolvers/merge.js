const Category = require('../../models/category');
const Product = require('../../models/product');
const User = require('../../models/user');

const transformCategory = ({ _doc: category }) => ({
  ...category,
  parentCategory: category.parentCategory ? getCategoryById(category.parentCategory) : null
});

const transformProduct = ({ _doc: product }) => ({
  ...product,
  author: () => getUser(product.author),
  category: () => getCategoryById(product.category)
});

const transformUser = ({ _doc: user }) => ({
  ...user,
  addedProducts: () => getProducts(user.addedProducts)
});

const getCategoryById = async categoryId => {
  try {
    const category = await Category.findById(categoryId);

    return transformCategory(category);
  } catch (err) {
    throw err;
  }
};

const getProducts = async productIds => {
  try {
    const products = await Product.find({
      _id: { $in: productIds }
    });

    return products.map(transformProduct);
  } catch (err){
    throw err;
  }
};

const getUser = async userId => {
  try {
    const user = await User.findById(userId);

    return transformUser(user);
  } catch (err) {
    throw err;
  }
};

exports.getCategoryById = getCategoryById;
exports.getProducts = getProducts;
exports.getUser = getProducts;
exports.transformCategory = transformCategory;
exports.transformProduct = transformProduct;
exports.transformUser = transformUser;
