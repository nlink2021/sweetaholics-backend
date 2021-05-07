require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const models = require('../models')

const orderController = {}

//create an order
orderController.create = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        const user = await models.user.findOne({where:{
        id: decryptedId.userId
        }})
        const date = new Date()
        const order = await models.order.create ({
            date: date.toString(),
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            total: req.body.total
        })
        await user.addOrder(order)
        await order.reload()
        res.json({message:'order created', order})
    }catch (error) {
        res.json({error: error.message})
    }
}

//get all orders
orderController.getAll = async (req, res) => {
    try{
        const order = await models.order.findAll()

        res.json({order})
    }catch (error) {
        res.json({error: error.message})
    }
}






module.exports = orderController
