var express = require('express');
var app = express();
var db = require('./database/database.js');
var userController = require('./controllers/UserController');

app.use('/users', userController);

module.exports = app;