const express = require('express')
const app = express()

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(require('cors')())
app.use(require('morgan')('tiny'))

const userRoutes = require('./routes/userRoutes')
const cartRoutes = require('./routes/cartRoutes')
app.use('/users', userRoutes)
app.use('/cart', cartRoutes)

const itemRoutes = require('./routes/itemRoutes')
app.use('/items', itemRoutes)

const orderRoutes = require('./routes/orderRoutes')
app.use('/orders', orderRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`port running on PORT`)
  routesReport.print()
})
