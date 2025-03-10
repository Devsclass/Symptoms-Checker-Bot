const express=require("express")
const router=express.Router()
const ConController =require("../Controllers/ConController")

router.get("/getConversation",ConController.GetConversations);
router.post("/CreateConversation",ConController.CreateConversation);
router.get("/DeleteConversation/:id",ConController.Condel)
module.exports=router;