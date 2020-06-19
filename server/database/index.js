//create database connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/checkoutPage', {useNewUrlParser: true});

module.exports = mongoose;