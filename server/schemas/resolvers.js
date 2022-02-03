const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
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

  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async(parent, {email, password}) => {
      const user = await User.findOne({ email });
      console.log(user)
      if(!user) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const correctPw = await user.isCorrectPassword(password);
      if(!correctPw) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const token = signToken(user);
      return {token, user};
    },
    removeUser: async (parent, { userId }, context) => {
      if (context.user) {
        return await User.findOneAndDelete({ _id: userId });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updateTeam: async (parent, {favoriteTeam, id},context) => {
      console.log("you made it")
      if(context.user) {
        //first curly is what i'm looking for
        //second curly is what I want to change
        const user= await User.findOneAndUpdate({_id: id},
          {favoriteTeam: favoriteTeam},
          {new:true})
          const token = signToken(user);
          return {token, user};
      }
      
    },

  },
};

module.exports = resolvers;
