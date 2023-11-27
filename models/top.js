const mongoose = require('mongoose');

const topProductSchema = new mongoose.Schema({
    name:{
        type:String,
        trim: true,
        require : true
    },
    img : {
        type : String,
        trim : true
    },
    price : {
        type : Number,
        min : 0,
        default : 0
    },
    wishlist : {
        type : Boolean,
        default : false,
        require : true
    },
    cart : {
        type : Boolean,
        default : false,
        require : true
    }
});

const TopProduct = mongoose.model('TopProduct',topProductSchema);
module.exports = TopProduct;