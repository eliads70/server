var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    id:Number,
    name:String,
    description:String,
    weight:String,
    price:Number,
    pic:String,
    type:String
});

module.exports = mongoose.model('products',productSchema);

