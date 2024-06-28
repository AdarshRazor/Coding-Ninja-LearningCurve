const path = require('path')
const ProductModel = require('../models/product.model.js')

class ProductController {

    // not a static method
    getProducts(req, res){
        // sendfile is coming from express 
        // we will be including path module to define the path
        // res.sendFile(path.join(path.resolve(), "src", "views", "products.html"))

        let products = ProductModel.get()
        // console.log(products)
        res.render('products', {products: products})
    }

    getAddForm(req, res){
        return res.render('new-product');
    }

    addNewProduct(req, res){
        console.log(req.body)
        let products = ProductModel.get()
        // after adding a new product we will redirect to the products page
        res.render('products', {products: products})
    }
}

module.exports = ProductController