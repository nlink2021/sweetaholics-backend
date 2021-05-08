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
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        const user = await models.user.findOne({where:{
        id: decryptedId.userId
        }})
        const orders = await user.getOrders()
        res.json({orders})
    }catch (error) {
        res.json({error: error.message})
    }
}

orderController.addItem = async(req,res) => {
    try {
        const added = await models.orderItem.create({
            orderId: req.body.orderId,
            itemId: req.body.itemId
        })
        const order = await models.order.findOne({where:{
            id: req.body.orderId
        }})
        const items = await order.getItems()
        res.json({message: 'item added', items: items })
    } catch (error) {
        res.json({error})
    }
}

orderController.getItems = async(req,res) =>{
    try {
        const order = await models.order.findOne({where:{
            id: req.body.orderId
        }})
        const items = await order.getItems()
        res.json({items})
    } catch (error) {
        res.json({error})
    }
}




module.exports = orderController
