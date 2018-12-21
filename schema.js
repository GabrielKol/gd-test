const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull
} = require('graphql');

// User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    name: { type: GraphQLString },
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parent, args) {
        return axios
          .get(`https://gooddollartest.firebaseio.com/user.json`)
          .then(res => res.data)
          .catch(e => console.log(e));
      }
    },
  }
});

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return axios
          .patch(`https://gooddollartest.firebaseio.com/user.json`, args)
          .then(res => res.data)
          .catch(e => console.log(e));
      }
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
