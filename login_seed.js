const mongoose = require('mongoose');
const Login = require('./models/login');

mongoose.connect('mongodb://127.0.0.1:27017/E-commerce-GLA')
    .then(()=>console.log("DB Connected."))
    .catch((err)=>console.log("Something Went Wrong!!"))

const login = [
    {
        islogin: false
    }
];

Login.insertMany(login)
    .then(()=>console.log('Details Seeded'))
    .catch((err)=>console.log('Something Went Wrong!!'));

// Product.deleteMany({})
//     .then(()=> console.log('Deleted everything in the collection!!'));
