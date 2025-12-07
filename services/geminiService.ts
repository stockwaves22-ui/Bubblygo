import { GoogleGenAI } from "@google/genai";

// Initialize with a fallback empty string to prevent constructor crash if env var is missing during build
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "TEMPORARY_BUILD_KEY" });

export const getStainAdvice = async (stainQuery: string): Promise<string> => {
  // Check if key is actually present and valid before calling
  if (!process.env.API_KEY || process.env.API_KEY === "TEMPORARY_BUILD_KEY") {
    return "Sisya AI is currently offline (Missing API Key).";
  }

  try {
    // Updated prompt to be general purpose while maintaining persona
    const prompt = `You are Sisya, a friendly and intelligent AI assistant for BubblyGo (a premium laundry service in Mandya). 
    A user is asking: "${stainQuery}".
    
    Instructions:
    1. If the question is about stains or laundry, provide expert advice in max 3 steps.
    2. If the question is general (greeting, joke, general knowledge, etc.), answer it helpfully and briefly.
    3. Keep the tone friendly, professional, and helpful.
    4. If the request is complex or unsafe, politely decline.
    
    Answer clearly and concisely.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "I couldn't generate a response at the moment. Please try again!";
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Sorry, I'm having trouble connecting right now.";
  }
};