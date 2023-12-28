// src/services/user.service.js

const { User } = require('../models');

const createUser = async (userName, email, password) => {
  const newUser = await User.create({userName, email, password});
  return newUser
}

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

module.exports = {
  getAll,
  createUser
};