const mongoose=require("mongoose")
const validator =require("validator")
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email format")
        }

    },
    balance:{
        type:Number,
        required:true,
    }
})

const User=mongoose.model("User",userSchema)
module.exports=User