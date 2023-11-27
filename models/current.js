const mongoose = require('mongoose');

const currentSchema = new mongoose.Schema({
        name : {
            type:String,
            require:true,
            default: "dummy"
        },
        
        wishlist: {
            type: [String],
            default: [] 
        },
        cartlist: {
            type: [String],
            default: [] 
        },
        orderlist: {
            type: [String],
            default: [] 
        }
});

const Current = mongoose.model('Current',currentSchema);
module.exports = Current;