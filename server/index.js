import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY
});
const openai = new OpenAIApi(configuration);

async function main () {
  const chatCompletion = openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
        { role: "user", content: "What is the capitol of the Serbia?"}
    ] 
  });

  console.log(chatCompletion.data.choices[0]);
};

main();