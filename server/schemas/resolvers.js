const { AuthenticationError } = require('apollo-server-express');
const { User, Example } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async(parent, args, context) => {
      if(context.user) {
        const userData = await User.findOne({_id: context.user._id })
        .select('-__v -password')

        return userData;
      }
      throw new AuthenticationError('Not Logged In')
    },

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
