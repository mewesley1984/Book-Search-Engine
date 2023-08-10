const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  verifyToken: (req, requireAuth = true) => {
    const header = req.headers.authorization;

    if (header) {
      const token = header.replace('Bearer ', '');
      const decoded = jwt.verify(token, secret, { maxAge: expiration });
      return decoded;
    }
    if (requireAuth) {
      throw new Error('Login in to access resource');
    }
    return null
  },
  signToken: function ({ email, username, password }) {
    const payload = { email, username, password };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
