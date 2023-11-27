const Razorpay = require('razorpay');
const Product=require('../models/product')
const Current=require('../models/current')
const User = require('../models/user');
const Login = require('../models/login');

const { RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY } = process.env;

const razorpayInstance = new Razorpay({
    key_id: RAZORPAY_ID_KEY,
    key_secret: RAZORPAY_SECRET_KEY
});

const renderProductPage = async (req, res) => {

    try {
        let current = await Current.findOne({});
        let user = await User.findOne({ name: current.name })
        let wish_count = 0;
        let cart_count = 0;
        if (user != null) {
            wish_count = user.wishlist.length;
            cart_count = user.cartlist.length;
        }
        let cartlistProductIds = user && user.cartlist ? user.cartlist : [];
        let cartlistProducts = await Product.find({ _id: { $in: cartlistProductIds } });

        let total = 0;
        cartlistProducts.forEach(product => {
            total += product.price;
        });
        if (total < 500 && total != 0) total += 40;
        let no_of_login = await Login.find({ islogin: true });
        let login_count = Object.keys(no_of_login).length;
        res.render('checkout', { total, cart_count, wish_count, login_count });

    } catch (error) {
        console.log(error.message);
    }

}

const createOrder = async (req, res) => {
    try {
        const amount = req.body.amount * 100
        const options = {
            amount: amount,
            currency: 'INR',
            receipt: 'ankitdwivedi36307@gmail.com'
        }

        razorpayInstance.orders.create(options,
            (err, order) => {
                if (!err) {
                    res.status(200).send({
                        success: true,
                        msg: 'Order Created',
                        order_id: order.id,
                        amount: amount,
                        key_id: RAZORPAY_ID_KEY,
                        product_name: req.body.name,
                        description: req.body.description,
                        contact: "8567345632",
                        name: "Ankit Dwivedi",
                        email: "ankitdwivedi36307@gmail.com"
                    });
                }
                else {
                    res.status(400).send({ success: false, msg: 'Something went wrong!' });
                }
            }
        );

    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    renderProductPage,
    createOrder
}