const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ email, favoriteTeam, _id }) {
    const payload = { email, favoriteTeam, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
