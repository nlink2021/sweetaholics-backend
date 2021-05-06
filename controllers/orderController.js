const models = require('../models')

const orderController = {}

//create an order
orderController.create = async (req, res) => {
    try {
        const user = await models.user.findOne ({
            where: {id: req.body.userId}
        })
        const order = await models.order.create ({
            order: req.body.order,
            date:req.body.date,
            total: req.body.total,
        },
       )
       console.log(typeof user.total, typeof req.body.date)
        res.json({order})

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
