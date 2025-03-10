const Conversation=require("../Models/Conversation")

exports.CreateConversation= async (req,res)=>{
   try {const {name,_id}=req.body;
   console.log(name,_id)
    const convo= await Conversation.create({
        convoname:name,
        user_id:_id
    })
    res.json(convo)}
    catch(error){
        res.status(500).json({ message: error.message });
    }
}


exports.GetConversations=async (req,res)=>{
   try
    {
    const convodata=await Conversation.find()
    res.json(convodata)
    }
    catch(error)
    {
        res.status(500).json({ message: error.message });
    }
}
exports.Condel=async(req,res)=>{
    const user = await Conversation.findById(req.params.id);

}
