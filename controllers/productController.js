
//import product collection/model
const products = require('../models/produtSchema')


// get all-products api

exports.getallproducts = async (req, res) => {
    // logic
    try {
        // get all products from products colletion in mongodb
        const allProducts = await products.find()
        res.status(200).json(allProducts)
    }
    catch (error) {
        res.status(401).json(error)
    }
}


// view product api
exports.viewproduct = async (req, res) => {
    // get product id from request
    const id = req.params.id

    // logic
    try {
        // check id is present mongodb
        const product = await products.findOne({ id })
        if (product) {
            // send to client
            res.status(200).json(product)
        }

        else {
            res.status(404).json("Product not found!!!!")
        }

    }


    catch (error) {
        res.status(401).json(error)
    }

}