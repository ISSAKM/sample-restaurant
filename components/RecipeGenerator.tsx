import React, { useState } from 'react';
import { ChefHat, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { generateRecipePost } from '../services/geminiService';
import { BlogPost } from '../types';

interface RecipeGeneratorProps {
  onRecipeGenerated: (post: BlogPost) => void;
  onCancel: () => void;
}

const RecipeGenerator: React.FC<RecipeGeneratorProps> = ({ onRecipeGenerated, onCancel }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const partialPost = await generateRecipePost(prompt);
      // We know generateRecipePost returns a partial, but for our app logic we can cast or spread defaults
      // The service guarantees most fields, but let's be safe
      if (partialPost) {
          onRecipeGenerated(partialPost as BlogPost);
      }
    } catch (err) {
      setError('The Sous Chef is currently overwhelmed. Please try again in a moment.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-chef-cream pt-24 pb-20 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100 relative">
        {/* Header */}
        <div className="bg-chef-black p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-chef-gold via-white to-chef-gold"></div>
            <ChefHat className="w-16 h-16 text-chef-gold mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold text-white mb-2">AI Sous Chef</h2>
            <p className="text-gray-400 font-light">Tell me what ingredients you have, or a craving you can't shake.</p>
        </div>

        {/* Form */}
        <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="prompt" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Your Request
                    </label>
                    <textarea
                        id="prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., A gluten-free dessert with strawberries, or a spicy seafood pasta..."
                        className="w-full h-32 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-chef-gold focus:border-transparent outline-none resize-none text-lg text-gray-700 placeholder-gray-400 bg-gray-50 transition-all"
                        disabled={isLoading}
                    />
                </div>

                {error && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-md border border-red-100">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p className="text-sm">{error}</p>
                    </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={isLoading}
                        className="flex-1 px-6 py-3 border border-gray-300 text-gray-600 font-bold rounded-sm hover:bg-gray-50 transition-colors disabled:opacity-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isLoading || !prompt.trim()}
                        className="flex-1 px-6 py-3 bg-chef-gold text-chef-black font-bold rounded-sm hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Creating Magic...
                            </>
                        ) : (
                            <>
                                <Sparkles className="w-5 h-5" />
                                Generate Recipe
                            </>
                        )}
                    </button>
                </div>
            </form>
            
            <div className="mt-8 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-widest">Powered by Gemini 3 Flash & 2.5 Flash Image</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeGenerator;