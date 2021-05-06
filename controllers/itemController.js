const models = require('../models')

const itemController = {}

//finding all item
itemController.getAll = async (req, res) => {
    try{
        const item = await models.item.findAll()

        res.json({item})
    }catch (error) {
        res.json({error: error.message})
    }
}

//find an item by id
itemController.getOne = async (req, res) => {
    try {
        const item = await models.item.findOne({
            where: {
                id: req.params.id
            }
        })

        res.json((item))
    } catch (error) {
        res.json({error: error.message})

    }
}

//find an item by type
itemController.getOneType = async (req, res) => {
    try {
        const item = await models.item.findOne({
            where: {
                type: req.body.type
            }
        })

        res.json((item))
    } catch (error) {
        res.json({error: error.message})

    }
}



module.exports = itemController
