const categoryResolver = require('./category');
const productResolver = require('./product');
const userResolver = require('./user');

const rootResolver = {
  ...categoryResolver,
  ...productResolver,
  ...userResolver
};

module.exports = rootResolver;
