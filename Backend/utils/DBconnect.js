const mongoose=require("mongoose")

const DB_Connect=async()=>{
    try
    {
     await mongoose.connect("mongodb+srv://haris:Haris2425236@cluster0.viow7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
      this.isconnected=true;
      console.log("MongoDB is connected")
   
    }
    catch(err){
     console.log("error on mongo connection",err);
    }
}


module.exports=DB_Connect