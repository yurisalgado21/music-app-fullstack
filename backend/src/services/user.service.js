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

const updatePassword = async ({email, password}) => {
  await User.update(
    {password},
    {where: {email}},
  );

  const user = await User.findOne({where: {email}});

  return user;
}

module.exports = {
  getAll,
  createUser,
  updatePassword
};