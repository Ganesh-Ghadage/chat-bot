import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";

const generateAIReply = async (userInput: string): Promise<string> => {

      const systemMessage = `
      you name is Aash and you are a AI chat bot assistance of a insuracne compnay.
      you are supposed to recommand user Insurance policy based on their needs.
      Answer in maximun 3 sentences only. If you don;t know the answer poiltely tell that you don't know the answer
      `

      const messages = [
            new SystemMessage(systemMessage),
            new HumanMessage(userInput),
      ]

      const model = new ChatGoogleGenerativeAI({
            model: "gemini-1.5-flash",
            temperature: 0,
            maxRetries: 2,
            apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
      });

      const aiMsg = await model.invoke(messages);

      console.log(aiMsg.content)

      return aiMsg?.content.toString()
}

export default generateAIReply;