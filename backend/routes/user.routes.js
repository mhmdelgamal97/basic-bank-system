const router=require("express").Router()
const userCntrl=require("../app/controller/user.controller")
router.post("/addUser",userCntrl.addUser)
router.get("/showAll",userCntrl.showAll)
router.post("/singleUser",userCntrl.singleUser)
router.put("/transefer",userCntrl.transferBalance)








module.exports=router