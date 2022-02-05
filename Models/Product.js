var mongoose = require('mongoose');
var productschema = mongoose.Schema({
    name:String,
    price:Number
})
module.exports = mongoose.model('ProductDetails',productschema)   //Movies collection