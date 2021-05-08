const orderRoutes = require('express').Router()
const orderController = require('../controllers/orderController')

orderRoutes.post('/create', orderController.create)
orderRoutes.get('/all',orderController.getAll)
orderRoutes.post('/add', orderController.addItem)
orderRoutes.post('/items', orderController.getItems)

module.exports = orderRoutes
