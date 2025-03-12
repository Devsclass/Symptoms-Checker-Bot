const Groq = require("groq-sdk");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./Routes/UserRoute");
const conversation = require("./Routes/Conversation_route");
const Chat = require("./Routes/ChatRoutes");
const DB_ConnectDB = require("./utils/DBconnect"); 

const app = express();


app.use(express.json()); 
app.use(cors({ origin: "*" }));

DB_ConnectDB();

app.use("/api/users", userRoutes);
app.use("/api/conversation", conversation);
app.use("/api/chat", Chat);

const Port = 8000;
app.listen(Port, () => {
  console.log(`server is listing on ${Port}`);
});

const groq = new Groq({
  apiKey: "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",
});

async function main() {
  const chatCompletion = await getGroqChatCompletion();

  console.log(chatCompletion.choices[0]?.message?.content || "");
}

async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "assistant",
        content:
          "you are a symptom detector. which will predict user disease.The answer should be short and you can ask more questions to the user to able to get prediction right. you will not question any answer which is not related to health.",
      },
      {
        role: "user",
        content: "what is c++",
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
}
