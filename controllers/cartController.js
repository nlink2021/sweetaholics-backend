require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const models = require('../models')

const cartController = {}

cartController.addItem = async(req,res) => {
    try {
        const added = await models.cartItem.create({
            cartId: req.body.cartId,
            itemId: req.body.itemId
        })
        const cart = await models.cart.findOne({where:{
            id: req.body.cartId
        }})
        const items = await cart.getItems()
        res.json({message: 'item added', items: items })
    } catch (error) {
        res.json({error})
    }
}

cartController.findItems = async(req,res) =>{
    try {
        const cart = await models.cart.findOne({where:{
            id: req.body.cartId
        }})
        const items = await cart.getItems()
        res.json({items})
    } catch (error) {
        res.json({error})
    }
}

cartController.delete = async(req,res) =>{
    try {
        const cartItem = await models.cartItem.findOne({where:{
            cartId: req.body.cartId,
            itemId: req.body.itemId
        }})
        const deleted = await models.cartItem.destroy({where:{
            cartId: req.body.cartId,
            itemId: req.body.itemId,
            createdAt: cartItem.createdAt,
            updatedAt: cartItem.updatedAt
        }})
        const cart = await models.cart.findOne({where:{
            id: req.body.cartId
        }})
        const items = await cart.getItems()
        res.json({message:'item removed from cart', items: items })
    } catch (error) {
        console.log(error);
    }
}


module.exports = cartController;

