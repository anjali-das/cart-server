const mongoose = require('mongoose')

// define shecema for cart collection to store data
const cartSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
       },
    price:{
        type:Number,
        required:true
    },
    
    image:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    grandTotal:{
        type:Number,
        required:true
    }
  

})

// create model to store cart
const cartitems= new mongoose.model("cartitems",cartSchema)

// export the model
module.exports = cartitems

