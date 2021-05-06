const itemController = require('../controllers/itemController');
const express = require('express');
const itemRoutes = express.Router();


itemRoutes.get('/',itemController.getAll)
itemRoutes.get('/:id',itemController.getOne)
itemRoutes.get('/:type',itemController.getOneType)


module.exports = itemRoutes;
