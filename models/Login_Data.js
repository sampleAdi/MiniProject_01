const mongoose = require('mongoose');
const data=new mongoose.Schema({
    user:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        min:0
    },
})

const Data=mongoose.model('Data',data);
module.exports=Data;