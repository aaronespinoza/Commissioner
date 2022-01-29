const { gql } = require('apollo-server-express');
//User Will define 
const typeDefs = gql`

  type Example {
    _id: ID
    exampleText: String
  }

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
    examples: [Example]
    user: User
  }

  type Mutation {
    addExample(exampleText: String!): Example
    addUser(firstName: String!, lastName: String!, email: String!, favoriteTeam: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
