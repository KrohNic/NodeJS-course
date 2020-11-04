const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { JWT_SECRET_KEY } = require('../../common/config');
const userService = require('../users/user.service');
const User = require('../users/user.model');

const signToken = async (login, password) => {
  const user = await userService.getByKey({ login });

  if (!user) return null;

  const { password: hashedPassword } = user;

  const isMatch = await bcrypt.compare(password, hashedPassword);

  if (!isMatch) return null;

  const { id } = User.toResponse(user);
  const token = jwt.sign({ login, id }, JWT_SECRET_KEY);

  return token;
};

module.exports = { signToken };
