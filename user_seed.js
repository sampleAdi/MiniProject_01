const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/E-commerce-GLA')
    .then(()=>console.log("DB Connected."))
    .catch((err)=>console.log("Something Went Wrong!!"))

const user = {
    name: "rohit",
    wishlist: [],
    cartlist: [],
    orderlist: []
};

User.insertMany(user)
    .then(()=>console.log('Details Seeded'))
    .catch((err)=>console.log('Something Went Wrong!!'));

// Product.deleteMany({})
//     .then(()=> console.log('Deleted everything in the collection!!'));
