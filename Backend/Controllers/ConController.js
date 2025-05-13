const Conversation=require("../Models/Conversation")
const Chat=require("../Models/ChatModel")
const {name}=require("../utils/Ai")
exports.CreateConversation= async (req,res)=>{
   try {
    
    const {name,id}=req.body;
    const convo= await Conversation.create({
        convoname:name,
        user_id:id
    })
    const nc={
      _id:convo._id,
      category:"Today",
      convoname:convo.convoname,
      createdAt:convo.createdAt,
      createdDate:convo.createdAt,
      updatedAt:convo.updatedAt,
    }
    res.status(201).json([nc])
  }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}
exports.GetAllConversations=async (req,res)=>{
    try {
     // console.log(req.body)
        // Define boundaries
        const today = new Date();
        today.setHours(0, 0, 0, 0);
    
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
    
        const last7DaysStart = new Date(today);
        last7DaysStart.setDate(last7DaysStart.getDate() - 7);
    
        const last30DaysStart = new Date(today);
        last30DaysStart.setDate(last30DaysStart.getDate() - 30);
    
        // For last month (previous calendar month)
        const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
        const lastMonthName = lastMonthStart.toLocaleString("en-US", { month: "long" });
    
        // For last month -1 (month before last)
        const lastMonthMinusOneStart = new Date(today.getFullYear(), today.getMonth() - 2, 1);
        const lastMonthMinusOneEnd = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        const lastMonthMinusOneName = lastMonthMinusOneStart.toLocaleString("en-US", { month: "long" });
    
        // For this year and last year
        const thisYearStart = new Date(today.getFullYear(), 0, 1);
        const lastYearStart = new Date(today.getFullYear() - 1, 0, 1);
        const lastYearEnd = new Date(today.getFullYear() - 1, 11, 31);
    
        // Aggregation pipeline
        const pipeline = [
          // Convert createdAt string to a Date object
          {
            $addFields: {
              createdDate: { $toDate: "$createdAt" }
            }
          },
          // Add category based on date boundaries
          {
            $addFields: {
              category: {
                $switch: {
                  branches: [
                    { case: { $gte: ["$createdDate", today] }, then: "Today" },
                    { case: { $gte: ["$createdDate", yesterday] }, then: "Yesterday" },
                    {
                      case: { $and: [{ $gte: ["$createdDate", last7DaysStart] }, { $lt: ["$createdDate", yesterday] }] },
                      then: "Last 7 Days"
                    },
                    {
                      case: { $and: [{ $gte: ["$createdDate", last30DaysStart] }, { $lt: ["$createdDate", last7DaysStart] }] },
                      then: "Last 30 Days"
                    },
                    {
                      case: { $and: [{ $gte: ["$createdDate", lastMonthStart] }, { $lte: ["$createdDate", lastMonthEnd] }] },
                      then: lastMonthName
                    },
                    {
                      case: { $and: [{ $gte: ["$createdDate", lastMonthMinusOneStart] }, { $lte: ["$createdDate", lastMonthMinusOneEnd] }] },
                      then: lastMonthMinusOneName
                    },
                    { case: { $gte: ["$createdDate", thisYearStart] }, then: "This Year" },
                    {
                      case: { $and: [{ $gte: ["$createdDate", lastYearStart] }, { $lte: ["$createdDate", lastYearEnd] }] },
                      then: `Last Year (${lastYearStart.getFullYear()})`
                    }
                  ],
                  default: { $concat: ["Year ", { $toString: { $year: "$createdDate" } }] }
                }
              }
            }
          },
          // Sort the results by createdAt descending
          { $sort: { createdAt: -1 } }
        ];
    
        // Run aggregation pipeline on the Conversation collection
        const conversations = await Conversation.aggregate(pipeline);
    
        res.json(conversations);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
}
exports.Condel=async(req,res)=>{
 
 try   {  
    const conversation_id=req.params.id 
    const conv = await Conversation.deleteOne({_id:conversation_id});
    const chats = await Chat.deleteMany({Conid:conversation_id});
      res.json("ok delted")
 }
 catch(err){
    res.status(500).json({ message: error.message });

 }
}

exports.GetConversation=async (req,res)=>{
    try
     {
        const {id}=req.id;
      
     const convodata=await Conversation.find({user_id:id})
     res.json(convodata)
     }
     catch(error)
     {
         res.status(500).json({ message: error.message });
     }
 }

 exports.Gentitles=async (req,res)=>{
   
   const {usermsg,aimsg,conlist,ccon,id}=req.body;
  console.log(usermsg,aimsg,conlist,id)
  const title=await name(usermsg,aimsg,conlist)
  const change=await Conversation.updateOne({_id:ccon},{$set:{convoname:title}})
  const convodata=await Conversation.find({user_id:id})
  console.log(convodata)
   res.status(201).json({data:convodata})
 }

 