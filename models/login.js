const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    islogin : {
        type : Boolean
    }
});

const Login = mongoose.model('Login',loginSchema);
module.exports = Login;