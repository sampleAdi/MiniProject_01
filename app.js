const express = require('express');
const app = express();
const path = require('path');
const port = 5555;
const mongoose = require('mongoose');
const Product = require('./models/product');
const TopProduct = require('./models/top');
const Login = require('./models/login');
const Data = require('./models/Login_Data');
const User = require('./models/user');
const Current = require('./models/current');


require("dotenv").config();
const paymentRoute = require('./routes/paymentRoute');
app.use(paymentRoute);

mongoose.connect('mongodb://127.0.0.1:27017/E-commerce-GLA')
.then(()=>console.log("DB Connected."))
.catch((err)=>console.log("Something Went Wrong!!"))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'public/css/')));
app.use('/src', express.static(path.join(__dirname, 'src'), { 'extensions': ['js'] }));

app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send("Hello...");
})
app.get('/products',async (req,res)=>{
    let products = await Product.find({});
    let topProducts = await TopProduct.find({});
    let current = await Current.findOne({});
    let user = await User.findOne({ name : current.name })
    let wish_count = 0;
    let cart_count = 0;
    if(user!=null){
        wish_count = user.wishlist.length;
        cart_count = user.cartlist.length;
    }
    let no_of_login=await Login.find({islogin:true});
    let login_count = Object.keys(no_of_login).length;
    res.render('index',{products,topProducts,wish_count,cart_count,login_count});
})

app.get('/about',async (req,res)=>{
    let current = await Current.findOne({});
    let user = await User.findOne({ name : current.name })
    let wish_count = 0;
    let cart_count = 0;
    if(user!=null){
        wish_count = user.wishlist.length;
        cart_count = user.cartlist.length;
    }
    let no_of_login=await Login.find({islogin:true});
    let login_count = Object.keys(no_of_login).length;
    res.render('about',{wish_count,cart_count,login_count});
})
app.get('/contact',async (req,res)=>{
    let current = await Current.findOne({});
    let user = await User.findOne({ name : current.name })
    let wish_count = 0;
    let cart_count = 0;
    if(user!=null){
        wish_count = user.wishlist.length;
        cart_count = user.cartlist.length;
    }
    let no_of_login=await Login.find({islogin:true});
    let login_count = Object.keys(no_of_login).length;
    res.render('contact',{wish_count,cart_count,login_count});
})

app.get('/product/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    let no_of_login=await Login.find({islogin:true});
    let login_count = Object.keys(no_of_login).length;
    let current = await Current.findOne({});
    let user = await User.findOne({ name : current.name })
    res.render('show',{ product,login_count,current,user});
})

app.get('/cart',async (req,res)=>{
    let products = await Product.find({});
    let current = await Current.findOne({});
    let user = await User.findOne({ name : current.name })
    let wish_count = 0;
    let cart_count = 0;
    if(user!=null){
        wish_count = user.wishlist.length;
        cart_count = user.cartlist.length;
    }
    let no_of_login=await Login.find({islogin:true});
    let login_count = Object.keys(no_of_login).length;
    res.render('cart',{ products,cart_count,wish_count,current,user,login_count });
});
app.get('/wish',async (req,res)=>{
    let products = await Product.find({});
    let current = await Current.findOne({});
    let user = await User.findOne({ name : current.name })
    let wish_count = 0;
    let cart_count = 0; 
    if(user!=null){
        wish_count = user.wishlist.length;
        cart_count = user.cartlist.length;
    }
    let no_of_login=await Login.find({islogin:true});
    let login_count = Object.keys(no_of_login).length;
    res.render('wishlist',{ products,user,wish_count,cart_count,login_count });
})

app.get('/checkout',async (req,res)=>{
    let current = await Current.findOne({});
    let user = await User.findOne({ name : current.name })
    let wish_count = 0;
    let cart_count = 0;
    if(user!=null){
        wish_count = user.wishlist.length;
        cart_count = user.cartlist.length;
    }
    let cartlistProductIds = user && user.cartlist ? user.cartlist : []; 
    let cartlistProducts = await Product.find({ _id: { $in: cartlistProductIds } });

    let total = 0;
    cartlistProducts.forEach(product => {
        total += product.price;
    });
    if(total<500 && total!=0) total+=40;
    let no_of_login=await Login.find({islogin:true});
    let login_count = Object.keys(no_of_login).length;
    res.render('checkout', { total,cart_count,wish_count,login_count });
})
app.get('/wish/:id',async(req,res)=>{
    const {id}=req.params;
    let current = await Current.findOne({});
    let user = await User.findOne({ name : current.name })
    const indexInWishlist = user.wishlist.indexOf(id);

    if (indexInWishlist!== -1) {
        current.wishlist.splice(indexInWishlist, 1);
        user.wishlist.splice(indexInWishlist, 1);
    }
    await current.save();
    await user.save();
    res.redirect('/wish');
})

app.get('/profile',async (req,res)=>{
    let current = await Current.findOne({});
    res.render('profile',{current});
})

app.get('/wish/:id/add2cart',async(req,res)=>{
    const { id } = req.params;
    let current = await Current.findOne({});
    let user = await User.findOne({ name : current.name })
    const indexInCartlist = user.cartlist.indexOf(id);

    if (indexInCartlist !== -1) {
        current.cartlist.splice(indexInCartlist, 1);
        user.cartlist.splice(indexInCartlist, 1);
    } else {
        current.cartlist.push(id);
        user.cartlist.push(id);
    }
    await current.save();
    await user.save(); 
    res.redirect('/wish');
})
app.get('/wish/:id/cart2cart',async(req,res)=>{
    const { id } = req.params;
    let current = await Current.findOne({});
    let user = await User.findOne({ name : current.name })
    const indexInCartlist = user.cartlist.indexOf(id);

    if (indexInCartlist!== -1) {
        current.cartlist.splice(indexInCartlist, 1);
        user.cartlist.splice(indexInCartlist, 1);
    }
    await current.save();
    await user.save();
    res.redirect('/cart');
})

app.get('/product/:id/add2cart',async (req,res)=>{
    const { id } = req.params;
    let current = await Current.findOne({});
    let user = await User.findOne({ name : current.name })
    // console.log(user);
    if(user!=null){
        const indexInCartlist = user.cartlist.indexOf(id);

        if (indexInCartlist !== -1) {
            current.cartlist.splice(indexInCartlist, 1);
            user.cartlist.splice(indexInCartlist, 1);
        } else {
            current.cartlist.push(id);
            user.cartlist.push(id);
        }
        // const product = await Product.findById(id);
        // product.cart = product.cart === true ? false : true;

        // await product.save(); 
        await current.save();
        await user.save();
    }
    res.redirect(`/product/${id}`);
});
app.get('/product/:id/add2wish',async (req,res)=>{
    const { id } = req.params;
    let current = await Current.findOne({});
    let user = await User.findOne({ name : current.name })
    // console.log(user);
    if(user!=null){
        const indexInWishlist = user.wishlist.indexOf(id);

        if (indexInWishlist !== -1) {
            current.wishlist.splice(indexInWishlist, 1);
            user.wishlist.splice(indexInWishlist, 1);
        } else {
            current.wishlist.push(id);
            user.wishlist.push(id);
        }
        await current.save();
        await user.save();
    }

    
    // const top = await Product.findById(id);
    // console.log(top);
    // top.wishlist = top.wishlist === true ? false : true;
    // await top.save(); 
    res.redirect(`/product/${id}`);
});

app.get('/login',(req,res)=>{
    res.render("login");
})
app.get('/register',(req,res)=>{
    res.render('register');
})
app.post('/validate', async (req, res) => {
  try {
    const { user, password } = req.body;
    const t = await Data.findOne({ user });
    if (t && t.password == password) {
        let login = await Login.findOne({});
        let customer = await User.findOne({ name : user })
        let curr = await Current.findOne({});
        // console.log(customer);
        // console.log(curr);
        curr.name = customer.name;
        curr.wishlist = customer.wishlist;
        curr.cartlist = customer.cartlist;
        curr.orderlist = customer.orderlist;
        login.islogin = true;
        await login.save();
        await curr.save(); 
        res.redirect('/products');
    } else {
      res.render('error_login');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
  });
app.post('/logout',async (req,res)=>{
    let login = await Login.findOne({});
    let curr = await Current.findOne({});
    login.islogin = false;
    curr.name = "dummy user";
    curr.wishlist = [];
    curr.cartlist = [];
    curr.orderlist = [];
    await login.save();
    await curr.save();
    res.redirect('/products');
});
  
  app.post('/store', async (req, res) => {
    const { user, password } = req.body;
  
    try {
      // Assuming Data is a Mongoose model
      await Data.create({ user:user, password:password });
      await User.create({ name:user });
      res.render('login');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });

app.get('*',(req,res)=>{
    res.send('<h1>So Sorry!!</h1><br><br><img src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="500" height="500" alt="Loading...">');
})

app.listen(port,()=>{
    console.log("Server is start working..");
})


// Seed => top_seed , product_seed , login_seed
// npm i ejs express mongoose nodemon concurrently razorpay body-parser dotenv