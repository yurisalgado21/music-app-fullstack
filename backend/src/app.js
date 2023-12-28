// src/app.js

const express = require('express');

const UserControllers = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/user', UserControllers.getAll);

module.exports = app;