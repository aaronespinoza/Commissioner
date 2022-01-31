const { AuthenticationError } = require('apollo-server-express');
const { User, Example } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // Query to do to display data to the profile page or anything to do with the logged in user
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

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async(parent, {email, password}) => {
      const user = User.findOne({ email });
      if(!user) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const correctPw = await user.isCorrectPassword(password);
      if(!correctPw) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const token = signToken(user);
      return {token, user};
    }

  },
};

module.exports = resolvers;
