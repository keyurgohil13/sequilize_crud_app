const express = require('express');

const route = express.Router();

const HomeController = require('../controllers/homeController');

route.get('/', HomeController.home);

route.get('/form', HomeController.form);

route.post('/submitForm', HomeController.submitForm);

module.exports = route;