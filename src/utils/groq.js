import { Groq } from "groq-sdk";

const GROQ_API = process.env.REACT_APP_API;

const groq = new Groq({
  apiKey: GROQ_API,
  dangerouslyAllowBrowser: true,
});

export const requestToGroqAI = async(content) => {
    const hasil = await groq.chat.completions.create({
      messages: [{
          role: "user",
          content,
        }],
      model: "llama3-8b-8192",
    });
    return hasil.choices[0].message.content;
}