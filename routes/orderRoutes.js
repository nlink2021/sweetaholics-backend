const orderRoutes = require('express').Router()
const orderController = require('../controllers/orderController')

orderRoutes.post('/create', orderController.create)
orderRoutes.get('/all',orderController.userOrders)
orderRoutes.post('/add', orderController.addItem)
orderRoutes.post('/items', orderController.getItems)
orderRoutes.get('/manage/all',orderController.getAll)
orderRoutes.put('/manage/ship', orderController.shipOrder)

module.exports = orderRoutes
