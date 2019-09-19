var graphqlObj = require('graphql');

var schema = new graphqlObj.GraphQLSchema({
  query: new graphqlObj.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: graphqlObj.GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});

module.exports = schema;
