const mongoose = require('mongoose')

// define shecema for product collection to store data
const productSchema = new mongoose.Schema({
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
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        rate:{
            type:String,
            required:true
        },
        count:{
            type:String,
            required:true
        }
    }

})

// create model to store products
const products= new mongoose.model("products",productSchema)

// export the model
module.exports = products

