
const express=require("express")
const router=express.Router()
const ChatController=require("../Controllers/ChatController")
const {VerifyToken}=require("../utils/VerifyToken")
router.get("/GetChat/:id",ChatController.GetChat);
router.post("/GetAllChats",ChatController.GetAllChats)
router.get("/DeleteConversation/:cid",ChatController.DelChat)
router.post("/CreateChat",VerifyToken,ChatController.ChatGen)
module.exports=router
