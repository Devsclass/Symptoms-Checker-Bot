const mongoose =require("mongoose")
const ChatSchema=new mongoose.Schema({
    role:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    userid:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    Conid:{
        type:mongoose.Types.ObjectId,
        ref:'Conversation',
        require:true
    },   
},
{timestamps:true},
)
const Chat=mongoose.model('Chat',ChatSchema)
module.exports=Chat;