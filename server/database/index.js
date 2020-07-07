//create database connection
const mongoose = require('mongoose');
//without docker
// mongoose.connect('mongodb://localhost:27017/checkoutPage', { useNewUrlParser: true });
mongoose.connect('mongodb://172.17.0.3/checkoutPage', { useNewUrlParser: true });

module.exports = mongoose;