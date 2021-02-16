const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Category {
    _id: ID!
    name: String!
    parentCategory: Category
  }

  type Price {
    currency: String!
    amount: Int!
    decimals: Int!
  }

  type Product {
    _id: ID!
    title: String!
    description: String!
    price: Price!
    picture: String
    condition: String!
    free_shipping: Boolean!
    tags: [String!]!
    category: Category!
    author: User!
  }

  type User {
    _id: ID!
    addedProducts: [Product!]!
    name: String!
    lastName: String!
    email: String!
  }

  type LoginData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  input CategoryInput {
    name: String!
    parentCategory: ID
  }

  input PriceInput {
    currency: String!
    amount: Int!
    decimals: Int!
  }

  input ProductInput {
    title: String!
    description: String!
    price: PriceInput!
    picture: String
    condition: String!
    free_shipping: Boolean!
    tags: [String!]!
    category: ID!
    author: ID!
  }

  input UserInput {
    name: String!
    lastName: String!
    email: String!
    password: String!
  }

  type RootQuery {
    getCategoryById(categoryId: ID!): Category!
    getProducts: [Product!]!
    getProductsByTag(keywords: String!): [Product!]!
    getProductById(productId: ID!): Product!
    login(email: String!, password: String!): LoginData!
  }

  type RootMutation {
    createCategory(categoryInput: CategoryInput): Category!
    createProduct(productInput: ProductInput): Product!
    createUser(userInput: UserInput): User!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
