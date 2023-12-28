// src/app.js

const express = require('express');

const UserControllers = require('./controllers/user.controller');
const { User } = require('./models')

const {generateToken} = require('./utils/generateToken')

const {middlewareLogin} = require('./middlewares/middlewareLogin')
const {middlewareUser} = require('./middlewares/middlewareUser')

const app = express();

app.use(express.json());

app.get('/user', UserControllers.getAll);

app.post('/login', middlewareLogin, async (req, res) => {
    const {userName, email, password} = req.body;
    const user = await User.findOne({where: {userName, email, password}});
    if (!user) {
        return res.status(400).json({message: 'Invalid fields'})
    }
    const token = generateToken(user.id);
    return res.status(200).json({token})
})

app.post('/user', middlewareUser, UserControllers.createUser);

module.exports = app;