const Chat=require("../Models/ChatModel")
// const main=require("../utils/Ai")
exports.GetChat = async (req, res) => {
  try {
    const conid=req.params.id;
    const Chats = await Chat.find(
      {
        Conid:conid
      }
    );
    res.json(Chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.GetAllChats = async (req, res) => {
  try {
    const Chats = await Chat.find();
    res.jason(Chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.DelChat = async (req, res) => {
    try {
        const Chats = await Chat.deleteMany({Conid : req.params.id});
        res.jason(Chats);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};
exports.ChatGen= async(req,res)=>{
    try{
          const {message,userid,conversation_id}=req.body;
       
          //first store that in the database
          const newmessage=await Chat.create({
            content:message,
            userid:userid,
            role:"user",
            Conid:conversation_id,
          })
          const history=await Chat.find(
            {
              Conid:conversation_id
            },
             " role content -_id"
          );
      
        
          // const response=await main(history)
          // const aiwmessage=await Chat.create({
          //   content:response,
          //   userid:userid,
          //   role:"assistant",
          //   Conid:conversation_id,
          // })
          res.status(201).json(aiwmessage);
  
    }
    catch(err){
        res.status(500).json({ message: err.message });      
    }
}