import openai from "./configure/open-ai.js";

async function main () {
  const chatCompletion = openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
        { role: "user", content: "What is the capitol of the Serbia?"}
    ] 
  });

  console.log(chatCompletion.data.messages.content);
};

main();