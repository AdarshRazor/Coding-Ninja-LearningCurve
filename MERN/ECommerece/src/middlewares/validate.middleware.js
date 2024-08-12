const validateRequest = (req, res, next) => {
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

        next()
}

module.exports = validateRequest;