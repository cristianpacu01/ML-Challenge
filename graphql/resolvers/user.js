const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');
const { transformUser } = require('./merge');

module.exports = ({
  createUser: async ({ userInput }) => {
    const { email, password } = userInput;

    try {
      const foundUser = await User.findOne({ email });

      if (foundUser) {
        throw new Error('User already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        ...userInput,
        password: hashedPassword
      });

      const savedUser = await user.save();

      return transformUser(savedUser);
    } catch (err) {
      throw err;
    }
  },
  login: async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isAuth = await bcrypt.compare(password, user.password);

    if (!isAuth) {
      throw new Error('Invalid credentials')
    }

    const token = jwt.sign({
      userId: user.id,
      email
    }, 'superSecretKey', {
      expiresIn: '1h'
    });

    return {
      userId: user.id,
      token,
      tokenExpiration: 1
    }
  }
});
