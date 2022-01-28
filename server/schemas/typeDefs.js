const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Example {
    _id: ID
    exampleText: String
  }

  type Query {
    examples: [Example]
  }

  type Mutation {
    addExample(exampleText: String!): Example
  }
`;

module.exports = typeDefs;
