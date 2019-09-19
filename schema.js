var graphqlObj = require('graphql');
var joinMonster = require('joinMonster');


const User = new graphqlObj.GraphQLObjectType({
  name: 'User',
  sqlTable: 'users',
  uniqueKey: 'id',
  fields: () => ({
    id: {
      type: graphqlObj.GraphQLInt,
    },
    email: {
      type: graphqlObj.GraphQLString,
    },
    firstName: {
      type: graphqlObj.GraphQLString,
    },
    lastName: {
      type: graphqlObj.GraphQLString,
    },
  }),
})

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
      user: {
        type: User,
        args: {
          id: { type: GraphQLInt },
        },
        where: (usersTable, args, context) => {
          if (args.id) return `${usersTable}.id = ${args.id}`
        },
        resolve: (parents, args, context, resolveInfo) => {
          return joinMonster(resolveInfo, {}, sql => {
            return knex.raw(sql);
          })
        }
      }
    },
  }),
});

module.exports = schema;
