const mongoose = require('mongoose');
const TopProduct = require('./models/top');

mongoose.connect('mongodb://127.0.0.1:27017/E-commerce-GLA')
    .then(()=>console.log("DB Connected."))
    .catch((err)=>console.log("Something Went Wrong!!"))

const topProducts = [
    {
        name : 'Iphone 11',
        img : 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        price : 64000,
        wishlist : false,
        cart : false,
        desc1 : "",
        desc2 : ""
    },
    {
        name : 'Nike Shoes',
        img : 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        price : 999,
        wishlist : false,
        cart : false
    },
    {
        name : 'Titan Watch',
        img : 'https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price : 399,
        wishlist : false,
        cart : false
    },
    {
        name : 'Macbook Pro',
        img : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price : 122000,
        wishlist : false,
        cart : false
    },
    {
        name : 'Drones',
        img : 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RHJvbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        price : 6999,
        wishlist : false,
        cart : false
    },
    {
        name: 'More Drones',
        img: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJvbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 5999,
        wishlist : false,
        cart : false
    },
    {
        name: 'Shoes',
        img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
        price: 2999,
        wishlist : false,
        cart : false
    },
    {
        name : 'Flower Pot',
        img : 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
        price : 599,
        wishlist : false,
        cart : false
    },
    {
        name : 'Back Pack',
        img : 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
        price : 1199,
        wishlist : false,
        cart : false
    }
];

TopProduct.insertMany(topProducts)
    .then(()=>console.log('Product Seeded'))
    .catch((err)=>console.log('Something Went Wrong!!'));

// TopProduct.deleteMany({})
//     .then(()=> console.log('Deleted everything in the collection!!'));
