
const userModel=require("../../db/models/user.model")

const transactionsModel=require("../../db/models/transactions")
class User{
    static addUser=async(req,res)=>{
        try{
            const user=new userModel(req.body)
            await user.save()
            res.status(200).send({
                apiStatus:true,
                data:user,
                message:"added"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"not added"
            })
        }
    }
    static showAll= async(req,res)=>{
        try{
            const users=await userModel.find()
            res.status(200).send({
                apiStatus:true,
                data:users,
                message:"fetched"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"not fetched"
            })
        }
    }
    static singleUser= async(req,res)=>{
        try{
            const user=await userModel.findById(req.body.id)
            res.status(200).send({
                apiStatus:true,
                data:user,
                message:"fetched"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"not fetched"
            })
        }
    }
    static transferBalance =async(req,res)=>{
        try{
            const sender=await userModel.findOne({"email":req.body.sender})
            const rec=await userModel.findOne({"email":req.body.rec})
            sender.balance-=parseInt(req.body.amount)
            await sender.save()
            rec.balance+=parseInt(req.body.amount)
            await rec.save()
            const transaction=new transactionsModel()
            transaction.senderEmail=sender.email
            transaction.recieverEmail=rec.email
            transaction.amount=req.body.amount
            await transaction.save()
            res.status(200).send({
                apiStatus:true,
                data:"",
                message:"transefered"
            })
            
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"not transefered"
            })
        }
    }
}




module.exports=User