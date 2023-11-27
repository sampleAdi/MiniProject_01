const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/E-commerce-GLA')
    .then(()=>console.log("DB Connected."))
    .catch((err)=>console.log("Something Went Wrong!!"))

    const products = [
        {
            "name": "Beats by Dr. Dre Studio",
            "image": {
                "img1": "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/w/u/k/-original-imagqcqfxzzss7aj.jpeg?q=70",
                "img2": "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/v/m/4/-original-imagrzsxdc2gzjtf.jpeg?q=70",
                "img3": "https://rukminim2.flixcart.com/image/832/832/l3q7jww0/watch/c/k/x/-original-images3efqu8tpzw.jpeg?q=70",
                "img4": "https://rukminim2.flixcart.com/image/832/832/kdlzte80/watch/1/a/a/a1371-casio-original-imafuhdkaxzxqdza.jpeg?q=70",
                "img5": "https://rukminim2.flixcart.com/image/832/832/kdlzte80/watch/t/f/l/a1371-casio-original-imafuhdk4rudmsqh.jpeg?q=70"
            },
            "price": 199,
            "desc1": "Experience premium sound quality with the Beats by Dr. Dre Studio headphones. These over-ear headphones provide exceptional comfort and are perfect for music enthusiasts.",
            "desc2": "Enjoy studio-quality audio with stylish design and advanced features.",
        }, 
        {
            "name": "Corsair HS35 Headphones(Red)",
            "image": {
                "img1": "https://rukminim2.flixcart.com/image/416/416/ksnjp8w0/headphone/m/x/2/zeb-paradise-zebronics-original-imag66c3bsy7zbp8.jpeg?q=70",
                "img2": "https://rukminim2.flixcart.com/image/416/416/ksnjp8w0/headphone/r/q/4/zeb-paradise-zebronics-original-imag66c3gpu45yu2.jpeg?q=70",
                "img3": "https://rukminim2.flixcart.com/image/416/416/ksnjp8w0/headphone/z/c/k/zeb-paradise-zebronics-original-imag66c3utkhrz6x.jpeg?q=70",
                "img4": "https://rukminim2.flixcart.com/image/416/416/ksnjp8w0/headphone/7/e/c/zeb-paradise-zebronics-original-imag66c39q8wzd7h.jpeg?q=70",
                "img5": "https://rukminim2.flixcart.com/image/416/416/ksnjp8w0/headphone/o/h/q/zeb-paradise-zebronics-original-imag66c3kv3ncxnd.jpeg?q=70"
            },
            "price": 349,
            "desc1": "Immerse yourself in the world of gaming with the Corsair HS35 Headphones in striking red. These high-performance headphones deliver precise audio for an enhanced gaming experience.",
            "desc2": "Designed for comfort during long gaming sessions, these headphones are a perfect choice for gamers.",
        },
        {
            "name": "Microsoft Xbox One S Blue Grey",
            "image": {
              "img1": "https://staticimg.titan.co.in/Fastrack/Catalog/38086PP07_1.jpg",
              "img2": "https://staticimg.titan.co.in/Fastrack/Catalog/38086PP07_2.jpg",
              "img3": "https://staticimg.titan.co.in/Fastrack/Catalog/38086PP07_3.jpg",
              "img4": "https://staticimg.titan.co.in/Fastrack/Catalog/38086PP07_4.jpg",
              "img5": "https://staticimg.titan.co.in/Fastrack/Catalog/38086PP07_7.jpg"
            },
            "price": 799,
            "desc1": "Upgrade your gaming setup with the Microsoft Xbox One S in a stylish blue-grey color. Experience the latest games with stunning graphics and advanced features.",
            "desc2": "Enjoy a new level of gaming with this powerful and sleek gaming console.",
        },
        {
            name: "SamSung Galaxy Note 10 Lite",
            image: {
                img1 : "https://m.media-amazon.com/images/I/41dfJvmb1DL._SY300_SX300_QL70_FMwebp_.jpg",
                img2 : "https://m.media-amazon.com/images/I/61D5hxJJtTL._SY741_.jpg",
                img3 : "https://m.media-amazon.com/images/I/61FmMURhfSL._SY741_.jpg",
                img4 : "https://m.media-amazon.com/images/I/61QOf4qI+3L._SY741_.jpg",
                img5 : "https://m.media-amazon.com/images/I/41F8GXsGXsL._SY741_.jpg"
            },
            price: 11999,
            desc1: "The Samsung Galaxy Note 10 Lite combines powerful performance with a sleek design. Capture stunning photos, enjoy a vibrant display, and stay productive on the go.",
            desc2: "Experience the convenience of the S Pen and the versatility of the Note series in a more affordable package."
        },
        {
            name: "Samsung Galaxy M21",
            image: {
                img1 : "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS3U5jzk0zs2DZccszRAUoY3hOB8knJuz3u-Qy8_bps909w6lkhExT5kHnx1FM6RqU0aW604IGKBTyqSQrrIzzh6h5eeuy5nYyr7WqGm705fMiZ92m3pqGTzA&usqp=CAE",
                img2 : "https://images.samsung.com/is/image/samsung/levant-feature-an-ideal-blend-of-sophisticated-style-and-comfort-314428154?$FB_TYPE_A_JPG$",
                img3 : "https://images.samsung.com/is/image/samsung/levant-feature-triple-camera-to-share-your-stories-314428150",
                img4 : "https://images.samsung.com/is/image/samsung/levant-feature---314428159?$1204_n_JPG$",
                img5 : "https://images.samsung.com/is/image/samsung/levant-feature-game-booster-gives-you-the-edge-314428120?$FB_TYPE_A_JPG$"
            },
            price: 8999,
            desc1: "Discover the Samsung Galaxy M21, a feature-packed smartphone with a powerful camera, long-lasting battery, and stunning display. Stay connected and entertained throughout the day.",
            desc2: "Experience reliable performance and impressive features in a sleek and affordable package."
        },
        {
            name: "Redmi Note 12 5G",
            image: {
                img1 : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQWuCVykJ9D4QIy-oKb0Sg04LTuuQbLukahlcNxOpB5FXTu5vrRwTXodXk0nAsjFVFs0YrWBSAAPOnsr-8LwKV8ahK3PYYM-Q",
                img2 : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ1gZV0Bw78OhdcTpijN3Lzrp4DvTr7UNU2gVlQ-asrBhQYl0Arheu8ghs_W7HuG4o6ERRzAWzealyVaq1gqKNt1efw_ElT",
                img3 : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSY_dpLyr8gxfh3KUQ8_Y3bWKhKNphBVXWloikVir_G3cxeI9bf5a89N4SUsK71aYGt5lnd_id4Pr3msfJVSNBBVUS_9AAW",
                img4 : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSpE90sEBpne6r-D0PEDe-mw3JQOLhMtnnXPAgxZtHirLKf5Jmzel574CH1eZFknzCy0pWFC3PRhIZIjtKXo3BTkUAPhk1SFw",
                img5 : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS27sG6Onhln_ezM-r5BKx41AnfsPA8NDHyobm99zx3F5x-uJI7j_1SS4u7-mk1AdjVS8JmsmyxVbitrC6E5vf2YqZl3Bor"
            },
            price: 11999,
            desc1: "Elevate your smartphone experience with the Samsung Galaxy V21. Capture stunning photos, enjoy a vibrant display, and access advanced features for a seamless user experience.",
            desc2: "Stay connected in style with the sleek design and powerful performance of the Galaxy V21."
        },
        {
            name: "SIRUM 360 Mobile Holder Trip",
            image: {
                img1 : "https://www.jiomart.com/images/product/original/rvwy47wksw/skycell-mobile-holder-for-car-dashboard-360-degree-car-mobile-stand-product-images-orvwy47wksw-p593880374-0-202209201151.jpg?im=Resize=(420,420)",
                img2 : "https://www.jiomart.com/images/product/original/rvwy47wksw/skycell-mobile-holder-for-car-dashboard-360-degree-car-mobile-stand-product-images-orvwy47wksw-p593880374-1-202209201151.jpg?im=Resize=(420,420)",
                img3 : "https://www.jiomart.com/images/product/original/rvwy47wksw/skycell-mobile-holder-for-car-dashboard-360-degree-car-mobile-stand-product-images-orvwy47wksw-p593880374-2-202209201151.jpg?im=Resize=(420,420)",
                img4 : "https://www.jiomart.com/images/product/original/rvwy47wksw/skycell-mobile-holder-for-car-dashboard-360-degree-car-mobile-stand-product-images-orvwy47wksw-p593880374-3-202209201151.jpg?im=Resize=(420,420)",
                img5 : "https://www.jiomart.com/images/product/original/rvwy47wksw/skycell-mobile-holder-for-car-dashboard-360-degree-car-mobile-stand-product-images-orvwy47wksw-p593880374-4-202209201151.jpg?im=Resize=(420,420)"
            },
            price: 99,
            desc1: "Secure your mobile device with the SIRUM 360 Mobile Holder Trip. This versatile holder offers 360-degree rotation and sturdy support, making it ideal for various activities.",
            desc2: "Enhance your mobile experience with this durable and adjustable mobile holder."
        },
        {
            name: "SmartPhone & Ipad",
            image: {
                img1 : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRD1jXLpXlS4s_438JAcoCg3SU_j7_ttukm6Jval7m1K9EJ3zC7RdqsSKXis0vr145l598tI7zDXTi4S_Ueor37U5GaaqP7fmqrqsWymGBCA1l9NWxLwdMukw&usqp=CAE",
                img2 : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTbvWah80ymuzw6tvUA6yFtUDchYvSaGYp_BtFBeIJx5roK3hcQ7k5O-d9Vj6gVDjzVpvbhd0tpNMEvgsprJ5O3UTEtW8nNhsvCi9B5gZqzX2_l51XD3v0l&usqp=CAE",
                img3 : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSHkuCxrROVbsX-Ca73FIacLIjRm4T1hA-qEX3opq7GVt8t989iezoOuhumjUKgxUnnYPTqBy-D1ZCrIWkyF4uup9wKEF4B4qb0Btyaj2ofZUmz5EVk0XHqJg&usqp=CAE",
                img4 : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTFavqSKewF8eI7mD7OcPOMZhLBsU0J0o6iJRn0YL9lBtenn9afEWiMw0vztRUWyT0C5I9AtZTlttQdtG_UQJCykm2GIKr4q5Y84xMA68jfD857gUeFiEzFfg&usqp=CAE",
                img5 : "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRffu9KWpiKqjys2vRCzauqrmUjho_sDPaxK4ssu1PC8dIj1QKFbWcr9CTjVyOU0zZyxwi-r1Zb07STXMBjce2maUFwTFI8kkVc9dBI52IGiYsFqd5178Jg_Ndm&usqp=CAE"
            },
            price: 16999,
            desc1: "Explore the SmartPhone & iPad combo for ultimate connectivity and productivity. Stay organized, entertained, and connected with these versatile devices.",
            desc2: "Experience the convenience of having a smartphone and iPad in one comprehensive package."
        }
    ];
    
    // Use the updated 'products' array in your code
    
// const products = [
//     {
//         name : 'Iphone 11',
//         img : 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
//         price : 300,
//         wishlist : false,
//         cart : false,
//         desc1 : "",
//         desc2 : ""
//     },
//     {
//         name : 'Nike Shoes',
//         img : 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
//         price : 100,
//         wishlist : false,
//         cart : false
//     },
//     {
//         name : 'Titan Watch',
//         img : 'https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//         price : 150,
//         wishlist : false,
//         cart : false
//     },
//     {
//         name : 'Macbook Pro',
//         img : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//         price : 250,
//         wishlist : false,
//         cart : false
//     },
//     {
//         name : 'Drones',
//         img : 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RHJvbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
//         price : 200,
//         wishlist : false,
//         cart : false
//     },
//     {
//         name: 'More Drones',
//         img: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJvbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//         price: 350,
//         wishlist : false,
//         cart : false
//     },
//     {
//         name: 'Bicycle',
//         img: 'https://images.unsplash.com/photo-1484920274317-87885fcbc504?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnljaWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//         price: 350,
//         wishlist : false,
//         cart : false
//     },
//     {
//         name : 'Racing Bike',
//         img : 'https://images.unsplash.com/photo-1588627541420-fce3f661b779?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JjeWNsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
//         price : 360,
//         wishlist : false,
//         cart : false
//     },
//     {
//         name : 'Racing Car',
//         img : 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
//         price : 430,
//         wishlist : false,
//         cart : false
//     }
// ];

Product.insertMany(products)
    .then(()=>console.log('Product Seeded'))
    .catch((err)=>console.log('Something Went Wrong!!'));

// Product.deleteMany({})
//     .then(()=> console.log('Deleted everything in the collection!!'));










