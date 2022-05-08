const mongoose=require("mongoose")
const validator=require("validator")

const transactionsSchema=mongoose.Schema({
    senderEmail:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email format")
        }
    },
    recieverEmail:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email format")
        }
    },
    amount:{
        type:Number,
        required:true,
        trim:true
    },
    time:{
        type:Date,
        default:new Date()
    }

})
const Transactions= mongoose.model("Transactions",transactionsSchema)

module.exports=Transactions