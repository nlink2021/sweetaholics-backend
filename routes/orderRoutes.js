const orderRoutes = require('express').Router()
const orderController = require('../controllers/orderController')

orderRoutes.post('/create', orderController.create)
orderRoutes.get('/all',orderController.getAll)


module.exports = orderRoutes
