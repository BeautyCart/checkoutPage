const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const Product = require('./models/product.js');

const port = 4000;

app.use(express.static('../client/dist'));

app.get('/checkout/products', (req, res) => {
  Product.find()
    .then((products) => res.send(products))
    .catch((err) => res.sendStatus(400));
});

// app.get('/product/:productId', (req, res) => {
//   Product.find({ _id: req.params.productId })
//     .then((product) => res.send(product))
//     .catch((err) => res.sendStatus(400));
// });

app.get('/checkout/relatedProducts/:productType', (req, res) => {
  Product.find({ itemName: { $regex: req.params.productType } }).limit(12)
    .then((products) => res.send(products))
    .catch((err) => res.sendStatus(400));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
