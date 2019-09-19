const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphqlSchema = require('./schema.js');

const app = express();

app.use(
	'/graphql',
	graphqlHTTP({
		schema: graphqlSchema,
		graphiql: true,
	}),
);

app.listen(4000);

