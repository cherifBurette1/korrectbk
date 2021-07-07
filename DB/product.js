const mongoose = require('mongoose');
const product = new mongoose.Schema({
    Title:{
        type:String,
    },
    Category:{
        type:String,
    },
    Description:{
        type:String,
    },
    Tags:{
        type:String,
    },
})
module.exports =mongoose.model('product',product);