
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./Routes/UserRoute");
const ConversationRoutes = require("./Routes/Conversation_route");
const ChatRoutes = require("./Routes/ChatRoutes");
const DB_ConnectDB = require("./utils/DBconnect");
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());  
app.use(cookieParser());
const allowedOrigins = [
  "http://localhost:3000", // ✅ For development on laptop
  "http://192.168.0.34:3000",
   // ✅ For testing on the local network
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // ✅ Ensures cookies work across devices
  })
);

DB_ConnectDB();

app.use("/api/users", userRoutes);
app.use("/api/Con",ConversationRoutes)
app.use("/api/Chat",ChatRoutes)
const Port = 8080;
app.listen(Port, () => {
  console.log(`server is listing on ${Port}`);
});

