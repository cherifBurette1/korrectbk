const mongoose = require('mongoose');
const product = new mongoose.Schema({
    Title:{
        type:String,
    },
    Category:{
        type:Number,
    },
    Description:{
        type:String,
    },
    Tags:{
        type:Number,
    },
})
module.exports =mongoose.model('product',product);