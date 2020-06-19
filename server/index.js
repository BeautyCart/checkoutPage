const express = require('express')
const app = express()
const Product = require('./models/product.js')
const port = 3000

app.use(express.static('../client/dist'))

app.get('/product', (req, res) => {
  Product.find()
    .then((products) => res.send(products))
    .catch((err) => res.sendStatus(400));
})

app.get('/product/:productId', (req, res) => {
  Product.find({_id: req.params.productId})
    .then((product) => res.send(product))
    .catch((err) => res.sendStatus(400));
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))