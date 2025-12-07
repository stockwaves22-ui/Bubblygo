import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getStainAdvice = async (stainQuery: string): Promise<string> => {
  if (!apiKey) {
    return "AI Assistant is currently offline (Missing API Key). Try 'Red Wine' or 'Coffee' for generic advice.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `You are a professional laundry expert at BubblyGo. 
    A user is asking for advice on how to remove a specific stain: "${stainQuery}".
    Provide a short, step-by-step guide (max 3 steps) on how to treat this stain before the laundry pickup. 
    Keep the tone helpful, friendly, and professional. 
    If the stain is extremely difficult, suggest they point it out to our driver for special treatment.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "I couldn't generate advice at the moment. Please ask our driver!";
  } catch (error) {
    console.error("Error fetching stain advice:", error);
    return "Sorry, I'm having trouble connecting to the stain database right now.";
  }
};
