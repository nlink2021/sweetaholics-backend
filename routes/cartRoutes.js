const cartController = require('../controllers/cartController');
const express = require('express');
const cartRoutes = express.Router();

cartRoutes.post('/add', cartController.addItem)
cartRoutes.post('/items', cartController.findItems)
cartRoutes.post('/delete', cartController.delete)


module.exports = cartRoutes;

