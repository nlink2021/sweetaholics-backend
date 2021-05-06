require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const models = require('../models')

const userController = {}

userController.signUp = async (req, res) => {
    try {
      const hashedPassword = bcrypt.hashSync(req.body.password, 10)
      const u = await models.user.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
      })
      const encryptedId = jwt.sign({ userId: u.id }, process.env.JWT_SECRET)
      const user = {id: encryptedId, name: u.name, email: u.email, city: u.city, state: u.state, zip: u.zip}
      res.json({message: 'Signed up', user:user })
    } catch (error) {
        console.log(error);
        res.json({error})
    //   res.status(400)
    //   res.json({ error: 'You used that email already, silly.' })
    }
}
userController.login = async (req, res) => {
    try {
      const u = await models.user.findOne({
        where: {
          email: req.body.email
        }
      })
      if (bcrypt.compareSync(req.body.password, u.password)) {
        const encryptedId = jwt.sign({ userId: u.id }, process.env.JWT_SECRET)
        const user = {id: encryptedId, name: u.name, email: u.email, city: u.city, state: u.state, zip: u.zip}
        res.json({message: 'login successful', user: user })
      }else{
        res.status(401)
        res.json({ error: 'Password is incorrect' })
      }
    } catch (error) {
      res.status(400)
      res.json({ error: 'login failed' })
    }
}

userController.getUser = async(req,res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        const user = await models.user.findOne({where:{
        id: decryptedId.userId
      }})
      if(user){
        res.json({message: 'found user', user: user})
      }
      else{
        res.status(404).json({ message: 'user not found' })
      }
    } catch (error) {
        res.json({error})
    }
}





module.exports = userController;