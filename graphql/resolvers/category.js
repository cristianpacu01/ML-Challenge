const { Category } = require('../../models');
const { transformCategory } = require('./merge');

module.exports = ({
  createCategory: async ({ categoryInput }) => {
    try {
      const category = new Category({
        ...categoryInput
      });

      const savedCategory = await category.save();

      return transformCategory(savedCategory);
    } catch (err) {
      throw err;
    }
  },
  getCategoryById: async ({ categoryId }) => {
    try {
      const category = await Category.findById(categoryId);

      return transformCategory(category);
    } catch (err) {
      throw err;
    }
  }
});
