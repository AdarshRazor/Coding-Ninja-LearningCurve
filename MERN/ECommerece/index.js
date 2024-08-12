const express = require('express');
const PORT  =  5000
const ProductController = require('./src/controllers/products.controller');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const validateRequest = require('./src/middlewares/validate.middleware');


const app =  express();

//parse form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middlware
app.use(ejsLayouts)

//setup view engine settings
app.set("view engine", "ejs")
app.set("views", path.join(path.resolve(), 'src', 'views'))

const productController = new ProductController();

app.get('/', productController.getProducts);
app.get(
    '/new', 
    productController.getAddProduct
)
app.post(
    '/', 
    // validate middleware
    validateRequest,
    productController.postAddProduct
)

app.use(express.static('src/views'))

// app.get(('/'), (req, res) => {
//     res.send('Hello World!')
// })

app.listen(PORT)