
//import wishlist collection/model
const wishlists = require('../models/wishlistSchema')
const wishlist = require('../models/wishlistSchema')

// add to wishlist
exports.addtowishlist = async (req,res)=>{
    // get product details from request
   //using destructuring
   const {id,title,price,image}  = req.body
   
    // logic
try{
// check product is in wishlist
const item = await wishlists.findOne({id})
if(item){
    res.status(403).json('Item already present in your wishlist!!!')
}
else{
    // add item in wishlist collection
    const newproduct = new wishlist({
        id,title,price,image
    })
    // to store db
    await newproduct.save()
    res.status(200).json('Item added to your wishlist!!!')


}
}
catch(err){
res.status(401).json(err)
}

}

// get wishlist
exports.getwishlistItems = async (req,res)=>{
     // logic
     try {
        // get all products from wishlists colletion in mongodb
        const allProducts = await wishlists.find()
        res.status(200).json(allProducts)
    }
    catch (error) {
        res.status(401).json(error)
    }
}

// remove item
exports.removefromwishlist = async (req,res)=>{
    // get id from req
    const{id} = req.params

    // remove id from wishlist collection
    try{
const removeItem = await wishlist.deleteOne({id})
if(removeItem){
// get all wishlist item after removing the particular item
const allItems = await wishlists.find()
res.status(200).json(allItems)

}
else{
    res.status(404).json('Item not present in your wishlist')

}
    }
    catch(err){
        res.status(401).json(err)

    }
}