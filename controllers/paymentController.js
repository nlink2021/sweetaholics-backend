const stripe = require('stripe')(process.env.STRIPE_KEY);

const { v4: uuidv4 } = require('uuid');
const payment = async (req,res)=>{
	const {product,token} = req.body;
    console.log("product", product)
	const idempotencyKey = uuidv4()
    return stripe.customers.create({
    email:token.email,
    source:token.id
    }).then(customer => {
        stripe.charges.create({
        amount:product.price * 100,
        currency:'usd',
        customer: customer.id,
        receipt_email: token.email,
        description: `your order`,
        }, {idempotencyKey})
    }) 
    .then(result =>res.status(200).json(result))
.catch(err => console.log(err))
}

module.exports = payment