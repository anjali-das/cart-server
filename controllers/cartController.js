// import cart collection
const cartitems = require('../models/cartSchema')

// add to cart
exports.addtocart = async (req,res)=>{
    // get product details from req
    const{id,title,price,image,quantity} = req.body

    // logic
    try{
        // check product is in cart collection
        const product = await cartitems.findOne({id})

        if(product){
            // product is in cart
            // increment product quantity
            product.quantity+=1
            // update grandtotal
            product.grandTotal = product.price*product.quantity
            // to save changes in mongodb
            product.save()
            // send response to client
            res.status(200).json("Items added to your cart....")
        }
        else{
            // product is not in cart
            // add product to cart
            const newProduct = new cartitems({
                id,title,price,image,quantity,grandTotal:price
            })
            // save new product to mongodb
            await newProduct.save()
            // send response to client
            res.status(200).json("Item added to your cart....")
        }

    }
    catch{
        res.status(401).json(err)

    }
}

// get cart
exports.getCart = async (req,res)=>{
    // logic
    try {
       // get all products from cart colletion in mongodb
       const allItems = await cartitems.find()
       res.status(200).json(allItems)
   }
   catch (error) {
       res.status(401).json(error)
   }
}


// remove cartitem
exports.removefromcart = async (req,res)=>{
    // get id from req
    const{id} = req.params

    // remove product with given id from cart collection
    try{
const removeItem = await cartitems.deleteOne({id})
if(removeItem){
// get all cart item after removing the particular item
const allProducts = await cartitems.find()
res.status(200).json(allProducts)

}
else{
    res.status(404).json('Item not present in your cart')

}
    }
    catch(err){
        res.status(401).json(err)

    }
}

// emptycart
exports.emptycart = async (req,res)=>{
    try{
         await cartitems.deleteMany({})
         res.status(200).json("Your Cart is Empty Now!!!!")

    }
    catch{
        res.status(404).json(error)
    }
}

// increment quantity
exports.incrementCount = async (req,res)=>{
    // get product id from req
    const {id} = req.params
    try{
// check product is in cart collection
const product =await cartitems.findOne({id})
if(product){
// update quantity, grandtotal
product.quantity+=1
product.grandTotal=product.price*product.quantity
// to save changes in mongodb
await product.save()
// get all cart colllection item after update the particular item count
const allItems =await cartitems.find()
res.status(200).json(allItems)
}
else{
res.status(404).json("Product is not in your cart!!!")
}

    }
catch{
    res.status(404).json(error)
}

}


// decrement product quantity
exports.decrementCount = async(req,res)=>{
    // get product id from req
    const {id} = req.params
    try{
        // check product is in cart collection
        const product = await cartitems.findOne({id})
        if(product)
        {
            // update quantity 
            product.quantity-=1
            // check quantity=0
            if(product.quantity==0)
            {
                // remove product from cart collection
                await cartitems.deleteOne({id})
                // get all cart collection item after removing the particular item
                const allItems = await cartitems.find()
                res.status(200).json(allItems)
            }
            else
            {                
            product.grandTotal=product.price*product.quantity
            // to save changes in monodb
            await product.save()
            // get all cart collection item after update the particular item count
            const allItems = await cartitems.find()
            res.status(200).json(allItems)
            }           
        }
        else
        {
            res.status(404).json('Product is not in your cart')
        }
    }
    catch(error){
        res.status(401).json(error)
 
    }

}


