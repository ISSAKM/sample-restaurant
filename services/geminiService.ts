import { GoogleGenAI, Type } from "@google/genai";
import { BlogPost, GeneratedRecipeResponse } from '../types';

// Ensure API key is available
const apiKey = process.env.API_KEY;
if (!apiKey) {
  console.warn("API_KEY is not defined. The AI Sous Chef will not function until a key is provided in Netlify environment variables.");
}

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: apiKey || 'MISSING_KEY' });

export const generateRecipePost = async (prompt: string): Promise<Partial<BlogPost>> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please configure it in your Netlify deployment settings.");
  }

  const modelId = "gemini-3-flash-preview";
  
  // 1. Generate the Text Content (Recipe)
  const systemInstruction = `
    You are a world-class executive chef at a high-end restaurant called "Savor & Stories".
    You are writing a blog post for the restaurant's website.
    Your tone should be elegant, passionate, and inviting.
    
    The user will provide a theme or ingredient. You must generate a complete blog post that includes:
    1. A catchy Title.
    2. An engaging Excerpt (short summary).
    3. The Content in Markdown format. The content should include a story/intro, then a formatted recipe (ingredients list, instructions), and a closing thought.
    4. A list of 3-5 relevant tags.
    
    Return the response as JSON.
  `;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      title: { type: Type.STRING },
      excerpt: { type: Type.STRING },
      content: { type: Type.STRING },
      tags: { 
        type: Type.ARRAY,
        items: { type: Type.STRING }
      }
    },
    required: ["title", "excerpt", "content", "tags"]
  };

  try {
    const result = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    if (!result.text) {
      throw new Error("No text returned from Gemini");
    }

    const parsed = JSON.parse(result.text);

    // 2. Generate an Image for the Recipe
    // We will use the generated title to prompt the image model
    const imagePrompt = `Professional food photography of ${parsed.title}, ${prompt}, restaurant quality, 4k, cinematic lighting, shallow depth of field`;
    
    let imageUrl = 'https://picsum.photos/800/600'; // Fallback
    
    try {
      const imageResult = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image', // Using flash-image for speed/availability
        contents: imagePrompt,
        config: {
          imageConfig: {
            aspectRatio: "4:3",
          }
        }
      });

      // Extract image
      for (const part of imageResult.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          imageUrl = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }
    } catch (imgError) {
      console.warn("Image generation failed, using placeholder", imgError);
    }

    return {
      id: Date.now().toString(),
      title: parsed.title,
      excerpt: parsed.excerpt,
      content: parsed.content,
      author: "AI Sous Chef",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      tags: parsed.tags,
      imageUrl: imageUrl,
      isAiGenerated: true,
    };

  } catch (error) {
    console.error("Error generating recipe post:", error);
    throw error;
  }
};