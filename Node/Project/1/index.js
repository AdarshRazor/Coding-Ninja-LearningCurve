const express = require('express');
const ProductController = require('./src/controllers/product.controller');
const path = require('path')
const ejslayouts = require('express-ejs-layouts');

// create a express server
const server = express();

//prase the data
server.use(express.urlencoded({extended: true}))

// setting up ejs layout
server.use(ejslayouts)

// create a ejs engine settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), 'src', 'views'));

// Create an instance of ProductController
const product_controller = new ProductController();

// Use express.static middleware to serve static files
server.use(express.static('src/views'));

// Define a route and use the controller's method to handle requests
server.get('/', product_controller.getProducts);
server.get('/new', product_controller.getAddForm)
server.post('/', product_controller.addNewProduct)

const port = 3000;

server.listen(port, function () {
    console.log('app listening on port', port);
});
