const paymentController = require('../controllers/paymentController');
const express = require('express');
const paymentRoutes = express.Router();

paymentRoutes.post('/checkout', paymentController)


module.exports = paymentRoutes;

