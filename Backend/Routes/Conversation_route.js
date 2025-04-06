const express=require("express")
const router=express.Router()
const ConController =require("../Controllers/ConController")
const {VerifyToken}=require("../utils/VerifyToken")
router.get("/getAllConversation",ConController.GetAllConversations);
router.post("/CreateConversation",ConController.CreateConversation);
router.get("/Getconversations",VerifyToken,ConController.GetConversation);
router.get("/DeleteConversation/:id",ConController.Condel)
module.exports=router;