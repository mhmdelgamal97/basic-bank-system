const transactionsModel=require("../../db/models/transactions")
class Transactions{
    static allTransactions=async(req,res)=>{
        try{
            const transactions=await transactionsModel.find()
            res.status(200).send({
                apiStatus:true,
                data:transactions,
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
    static userTransactions=async(req,res)=>{
        try{
            const sentTrans=await transactionsModel.find({"senderEmail":req.body.email})
            const recievedTrans=await transactionsModel.find({"recieverEmail":req.body.email})
            res.status(200).send({
                apiStatus:true,
                sentTrans:sentTrans,
                recievedTrans:recievedTrans,
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
}

module.exports=Transactions