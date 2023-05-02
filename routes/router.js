//To define routes for client request create routes folder and router.js file
const express = require('express')

// import product controller
const productController = require('../controllers/productController')

// import wishlist controller
const wishlistController = require('../controllers/wishlistController')

// import cartController
const cartController = require('../controllers/cartController')


// using express create object for router class inorder to setup path
const router = new express.Router()





// resolve client request in various server router

// api

// get-all products
router.get('/products/all-products',productController.getallproducts)

// view-product/id
router.get('/products/view-product/:id',productController.viewproduct)

// add-to-wishlist
router.post('/wishlist/add-product',wishlistController.addtowishlist)

// get-wishlist-item
router.get('/wishlist/get-items',wishlistController.getwishlistItems)

// remove-wishlist-item
router.delete('/wishlist/remove-item/:id',wishlistController.removefromwishlist)

// addto cart
router.post('/cart/add-product',cartController.addtocart)

// get-cart
router.get('/cart/all-products',cartController.getCart)

// remove-wishlist-item
router.delete('/cart/remove-item/:id',cartController.removefromcart)

// emptycart
router.delete('/cart/remove-all-items',cartController.emptycart)

// increment cart count
router.get('/cart/increment-item/:id',cartController.incrementCount)

// decrement cart count
router.get('/cart/decrement-item/:id',cartController.decrementCount)






// export router
module.exports = router
