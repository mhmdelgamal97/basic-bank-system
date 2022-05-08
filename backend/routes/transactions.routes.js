const router=require("express").Router()
const transactionsCntrl=require("../app/controller/trans.controller")

router.get("/allTransactions",transactionsCntrl.allTransactions)
router.post("/userTransactions",transactionsCntrl.userTransactions)

module.exports=router