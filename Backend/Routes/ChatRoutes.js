
const express=require("express")
const router=express.Router()
const ChatController=require("../Controllers/ChatController")
router.get("/GetChat/:id",ChatController.GetChat);
router.get("/GetAllChats",ChatController.GetAllChats)
router.get("/DeleteConversation/:cid",ChatController.DelChat)
router.post("/CreateChat",ChatController.ChatGen)
module.exports=router