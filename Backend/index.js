
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./Routes/UserRoute");
const ConversationRoutes = require("./Routes/Conversation_route");
const ChatRoutes = require("./Routes/ChatRoutes");
const DB_ConnectDB = require("./utils/DBconnect");
const cookieParser = require('cookie-parser');
const app = express();
const dotenv=require("dotenv")
dotenv.config()

app.use(express.json());  
app.use(cookieParser());
const allowedOrigins = [
  process.env.frontendurl,

];


app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || origin==process.env.frontendurl) {
        callback(null, true);
      } else {
        console.log(origin , process.env.frontendurl)
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, 
  })
);

DB_ConnectDB();

app.use("/api/users", userRoutes);
app.use("/api/Con",ConversationRoutes)
app.use("/api/Chat",ChatRoutes)

const Port = 8080;
app.listen(process.env.Port, () => {
  console.log(`server is listing on ${process.env.Port}`);
});

