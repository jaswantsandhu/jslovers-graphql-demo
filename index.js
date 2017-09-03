const express = require('express');
const bodyParser = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const axios = require("axios");
const {Schema} = require("./schema/schema")

const PORT = 3000;
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({schema: Schema, graphiql: true}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(PORT);