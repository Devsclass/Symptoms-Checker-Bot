const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: "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",
  });
  
  async function main(history) {
    const chatCompletion = await getGroqChatCompletion(history);
    return chatCompletion.choices[0]?.message?.content || "";
  }
  
  async function getGroqChatCompletion(history) {
    return groq.chat.completions.create({
      messages: [
        {
          role: "assistant",
          content:
            "you are a symptom detector. which will predict user disease.The answer should be short and you can ask more questions to the user to able to get prediction right. you will not question any answer which is not related to health.",
        },
        ...history
      ],
      model: "llama-3.3-70b-versatile",
    });
  }
  module.exports=main