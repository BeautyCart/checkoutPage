const db = require('../database/index.js');

const { Schema } = db;

const productSchema = new Schema({
  image: String,
  brand: String,
  itemName: String,
  reviews: Number,
  reviewAmount: Number,
  hearts: Number,
  options: Array,
}, { autoCreate: true });

const Product = db.model('Product', productSchema);

module.exports = Product;
