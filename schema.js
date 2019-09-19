var graphqlObj = require('graphql');
var joinMonster = require('joinMonster');

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
