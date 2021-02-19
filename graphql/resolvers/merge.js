const {
  Category,
  Picture,
  Product,
  User
} = require('../../models');

const transformCategory = ({ _doc: category }) => ({
  ...category,
  parentCategory: category.parentCategory ? getCategoryById(category.parentCategory) : null
});

const transformPicture = ({ _doc: picture }) => ({
  ...picture,
  img: {
    ...picture.img,
    data: picture.img.data.toString('base64')
  }
});

const transformProduct = ({ _doc: product }) => ({
  ...product,
  author: () => getUser(product.author),
  category: () => getCategoryById(product.category),
  pictures: () => getPictures(product.pictures)
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

const getPictures = async pictureIds => {
  try {
    const pictures = await Picture.find({
      _id: { $in: pictureIds }
    });

    return pictures.map(transformPicture);
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
exports.getPictures = getPictures;
exports.getProducts = getProducts;
exports.getUser = getProducts;
exports.transformCategory = transformCategory;
exports.transformPicture = transformPicture;
exports.transformProduct = transformProduct;
exports.transformUser = transformUser;
