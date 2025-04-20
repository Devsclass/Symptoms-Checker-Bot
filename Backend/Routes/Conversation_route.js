const express=require("express")
const router=express.Router()
const ConController =require("../Controllers/ConController")
const {VerifyToken}=require("../utils/VerifyToken")
router.get("/getAllConversation",VerifyToken,ConController.GetAllConversations);
router.post("/CreateConversation",VerifyToken,ConController.CreateConversation);
router.get("/Getconversations",VerifyToken,ConController.GetConversation);
router.get("/DeleteConversation/:id",ConController.Condel)
router.post("/Gentitles",VerifyToken,ConController.Gentitles);

module.exports=router;
