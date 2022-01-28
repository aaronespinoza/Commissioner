const { AuthenticationError } = require('apollo-server-express');
const { User, Example } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    examples: async () => {
      return Example.find({});
    }
  },

  Mutation: {
    addExample: async (parent, { exampleText }, context) => {
        const example = await Example.create({
          exampleText
        });
        return example;
      
    },
  },
};

module.exports = resolvers;
