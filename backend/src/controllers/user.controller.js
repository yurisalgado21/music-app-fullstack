// src/controllers/user.controller.js

const userService = require('../services/user.service');
const { User } = require('../models');
const { generateToken } = require('../utils/generateToken');

const createUser = async (req, res) => {
  try {
    const {userName, email, password} = req.body;
    const user = await User.findOne({where: {email}});
    if (user) {
      return res.status(409).json({
        message: 'User already registered',
      });
    }
    const newUser = await userService.createUser(userName, email, password);
    const token = generateToken(newUser.id);
    return res.status(201).json({token})
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
}

const getAll = async (_req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};

const getUser = async (req, res) => {
  try {
    const {email} = req.body;
    const user = await userService.getUser(email);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message: error.message})
  }
}

const updatePassword = async (req, res) => {
  try {
    const {email, password} = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: 'Some required fields are missing',
      }); 
    }
    const newPasswordUser = await userService.updatePassword({email, password})
    return res.status(200).json(newPasswordUser);
  } catch (error) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
}

module.exports = {
  getAll,
  getUser,
  createUser,
  updatePassword
};