const { gql } = require('apollo-server-express');
//User Will define 
const typeDefs = gql`

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    favoriteTeam: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, favoriteTeam: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User
    updateTeam( id: ID!,favoriteTeam: String!): Auth
  }
`;

module.exports = typeDefs;
