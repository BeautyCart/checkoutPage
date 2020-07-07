const express = require('express');

const app = express();
const Product = require('./models/product.js');

const port = 4000;

app.use('/checkout', express.static('../client/dist'));
app.use('/checkout/:productId', express.static('../client/dist'));

app.get('/checkout/products', (req, res) => {
  console.log("YOU JUST SEARCHED FOR ALL PRODUCTS");
  Product.find()
    .then((products) => res.send(products))
    .catch((err) => res.sendStatus(400));
});

app.get('/checkout/products/:productId', (req, res) => {
  console.log("YOU JUST SEARCHED FOR A SPECIFIC PRODUCT OF ID", req.params.productId);
  Product.find({ count: req.params.productId })
    .then((product) => res.send(product))
    .catch((err) => res.send(err));
});

app.get('/checkout/relatedProducts/:productType', (req, res) => {
  Product.find({ itemName: { $regex: req.params.productType } }).limit(12)
    .then((products) => res.send(products))
    .catch((err) => res.sendStatus(400));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
