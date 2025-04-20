
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
  "http://localhost:3000",
  "http://192.168.0.34:3000",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || process.env.allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
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

;
app.listen(process.env.Port, () => {
  console.log(`server is listing on ${process.env.Port|8080}`);
});

