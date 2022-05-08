require("../db/conn")
const express=require("express")
const app=express()
const cors=require("cors")
const userRouter=require("../routes/user.routes")
const transRouter=require("../routes/transactions.routes")

// app.get("/",(req,res)=>{
//     res.send("hello")
// })
app.use(cors())
app.use(express.json())
app.use("/api/user",userRouter)
app.use("/api/transactions",transRouter)
module.exports=app