const express = require('express');
const ProductController = require('./src/controllers/product.controller');
const path = require('path')
 
// create a express server
const server = express();

// create a ejs engine settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), 'src', 'views'));

// Create an instance of ProductController
const product_controller = new ProductController();

// Use express.static middleware to serve static files
server.use(express.static('src/views'));

// Define a route and use the controller's method to handle requests
server.get('/', product_controller.getProducts);

const port = 3000;

server.listen(port, function () {
    console.log('app listening on port', port);
});
