const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:
        {
            type:Number,
            required:[true,"Price Must be provided"]
        }
    ,
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.9
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi"],
            message:`{VALUE} is not supported`,
        }
    }
});

const model=mongoose.model('Product',ProductSchema);
module.exports=model