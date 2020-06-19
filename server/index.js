const express = require('express')
const app = express()
const Product = require('./models/product.js')
const port = 3000

app.get('/product', (req, res) => {
  Product.find()
    .then((products) => res.send(products))
    .catch((err) => res.sendStatus(400));
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))