const express = require('express')
const app = express()

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(require('cors')())
app.use(require('morgan')('tiny'))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

const userRoutes = require('./routes/userRoutes')
const cartRoutes = require('./routes/cartRoutes')
const paymentRoutes = require('./routes/paymentRoutes')
app.use('/users', userRoutes)
app.use('/cart', cartRoutes)
app.use('/payment', paymentRoutes)

const itemRoutes = require('./routes/itemRoutes')
app.use('/items', itemRoutes)

const orderRoutes = require('./routes/orderRoutes')
app.use('/orders', orderRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`port running on PORT`)
  routesReport.print()
})

