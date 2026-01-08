
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisProtocol, OutputTone, OracleResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export async function generateBranding(
  activityName: string,
  protocol: AnalysisProtocol,
  tone: OutputTone
): Promise<OracleResult> {
  // 1. Generate text content using Gemini 3 Flash
  const textPrompt = `Generate a futuristic branding bio for a spiritual oracle/fortune teller.
  Name: ${activityName}
  Protocol: ${protocol}
  Tone: ${tone}
  
  Provide:
  1. A short, impactful bio (2-3 sentences) in Korean.
  2. Exactly 3 hashtags in Korean related to the brand.
  
  Return valid JSON.`;

  const textResponse = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: textPrompt,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          bio: { type: Type.STRING },
          tags: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ['bio', 'tags']
      }
    }
  });

  const textResult = JSON.parse(textResponse.text || "{}");

  // 2. Generate a profile image using Gemini 2.5 Flash Image
  const imagePrompt = `A futuristic, high-tech spiritual oracle portrait. 
  Cyberpunk aesthetic, neon lighting, mysterious atmosphere. 
  The character is a "Cyber Seer" named ${activityName}. 
  Protocols like ${protocol} are visually represented as holographic symbols around them. 
  High fashion, digital face paint, sleek and modern.`;

  const imageResponse = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: imagePrompt,
    config: {
      imageConfig: {
        aspectRatio: "1:1"
      }
    }
  });

  let imageUrl = "https://picsum.photos/400/400"; // Fallback
  for (const part of imageResponse.candidates[0].content.parts) {
    if (part.inlineData) {
      imageUrl = `data:image/png;base64,${part.inlineData.data}`;
      break;
    }
  }

  return {
    name: activityName,
    protocol,
    tone,
    bio: textResult.bio || "미래의 데이터를 해독하여 당신만의 운명을 브랜딩합니다.",
    tags: textResult.tags || ["#미래", "#브랜딩", "#AI"],
    imageUrl,
    verified: true
  };
}
