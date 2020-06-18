const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionsSchema = new Schema({
  name: String,
  price: Number, 
  product: {type: Schema.Types.ObjectId, ref: 'Product'}
}, {autoCreate: true})

const Option = mongoose.model('Option', optionSchema)