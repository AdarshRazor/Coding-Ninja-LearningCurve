const path = require('path')
const ProductModel = require('../models/product.model.js')

class ProductController{

    getProducts(req, res){
        //directory of index.js
        //console.log(path.resolve())
        let product = ProductModel.get()
        res.render("products", {products: product})
    }

    // addNewProduct(req, res){
    //     console.log(req.body)
    //     //addProduct model to add the new product
    //     ProductModel.add(req.body)
    //     //redirect to products page
    //     let products = ProductModel.get()
    //     return res.render("products", {products})
    // }

    getAddProduct(req, res, next){
        res.render('new-product', {errorMessage: null})
    }

    postAddProduct(req, res){
        //Validate data
        const {name, price, imageURL} = req.body;
        let errors = []
        if (!name || name.trim() == ''){
            errors.push('Name is required')
        }
        if (!price || parseFloat(price) < 1){
            errors.push('Price must be a positive value')
        }
        try{
            const ValidURL = new URL(imageURL)
        }
        catch(err){
            errors.push("URL is invalid");
        }

        if(errors.length > 0){
            return res.render('new-product', {errorMessage: errors[0]})
        }

        ProductModel.add(req.body);
        var products = ProductModel.get();
        res.render('index', {products})
    }
}

module.exports = ProductController;