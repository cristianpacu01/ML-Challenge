const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const { graphqlHTTP } = require('express-graphql');
const path = require('path');
const Picture = require('./models/picture');
const mongoose = require('mongoose');
const multer = require('multer');

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

/*
// Rest
*/

const upload = multer({ dest: 'uploads/' });

app.post('/upload-picture', upload.single('image'), async (req, res) => {
  try {
    const { file, body } = req;
    const picture = new Picture({
      ...body,
      name: file.originalname,
      img: {
        data: fs.readFileSync(path.join(__dirname + '/uploads/' + file.filename)),
        contentType: file.mimetype
      }
    });

    const { description, name, alt, _id } = await picture.save();

    res.status(200).send({
      pictureId: _id,
      alt,
      description,
      name
    });
  } catch (err) {
    res.sendStatus(501);
    throw err;
  }
});

app.get('/get-images', async (req, res) => {
  try {
    const pictures = await Picture.find();

    res.send(pictures);
  } catch (err) {
    res.sendStatus(501);
    throw err;
  }
});

/*
// End rest
*/

mongoose.connect(
  `mongodb+srv://${
    process.env.MONGO_USER
  }:${
    process.env.MONGO_PASSWORD
  }@cluster0.ftu2p.mongodb.net/${
    process.env.MONGO_DB
  }?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log('[Connected to MongoDB]')
  app.listen(port);
}).catch(err => {
  console.log('[Error]', err)
});

