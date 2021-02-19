const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Category {
    _id: ID!
    name: String!
    parentCategory: Category
  }

  type Price {
    amount: Int!
    currency: String!
    decimals: Int!
  }

  type Image {
    contentType: String!
    data: String!
  }

  type Picture {
    _id: ID!
    alt: String!
    description: String!
    img: Image!
    name: String!
  }

  type Product {
    _id: ID!
    author: User!
    category: Category!
    condition: String!
    description: String!
    free_shipping: Boolean!
    pictures: [Picture!]!
    price: Price!
    sold: Int
    tags: [String!]!
    title: String!
  }

  type User {
    _id: ID!
    addedProducts: [Product!]!
    email: String!
    lastName: String!
    name: String!
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
    amount: Int!
    currency: String!
    decimals: Int!
  }

  input ProductInput {
    author: ID!
    category: ID!
    condition: String!
    description: String!
    free_shipping: Boolean!
    pictures: [ID!]!
    price: PriceInput!
    tags: [String!]!
    title: String!
  }

  input UserInput {
    email: String!
    lastName: String!
    name: String!
    password: String!
  }

  type RootQuery {
    getCategoryById(categoryId: ID!): Category!
    getProducts: [Product!]!
    getProductById(productId: ID!): Product!
    getProductsByTag(keywords: String!): [Product!]!
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
