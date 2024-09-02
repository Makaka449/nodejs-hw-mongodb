// src/services/auth.js
const User = require('../models/user');

const createUser = async ({ name, email, password }) => {
  const user = new User({ name, email, password });
  return await user.save();
};

module.exports = { createUser };
