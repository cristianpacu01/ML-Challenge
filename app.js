const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

const graphQLSchema = require('./graphql/schema');
const graphQLResolvers = require('./graphql/resolvers');
const { allowCors } = require('./middleware');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use(allowCors);

app.use('/graphql', graphqlHTTP({
  schema: graphQLSchema,
  rootValue: graphQLResolvers,
  graphiql: true
}));

mongoose.connect(
  `mongodb+srv://${
    process.env.MONGO_USER
  }:${
    process.env.MONGO_PASSWORD
  }@cluster0.ftu2p.mongodb.net/${
    process.env.MONGO_DB
  }?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
).then(() => {
  console.log('[Connected to MongoDB]')
  app.listen(port);
}).catch(err => {
  console.log('[Error]', err)
})


