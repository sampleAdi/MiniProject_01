const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    
    name:{
        type:String,
        trim: true,
        require : true
    },
    image : {
        img1: {
            type : String,
            trim : true
        },
        img2: {
            type : String,
            trim : true
        },
        img3: {
            type : String,
            trim : true
        },
        img4: {
            type : String,
            trim : true
        },
        img5: {
            type : String,
            trim : true
        }
    },
    price : {
        type : Number,
        min : 0,
        default : 0
    },
    desc1:{
        type:String,
        trim:true,
        required:true
    },
    desc2:{
        type:String,
        trim:true
    }
});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;