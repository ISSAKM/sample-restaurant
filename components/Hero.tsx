import React from 'react';
import { ChefHat } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onGenerate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore, onGenerate }) => {
  return (
    <div className="relative h-[600px] w-full bg-chef-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1934&q=80")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-chef-black via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="bg-chef-gold/10 p-4 rounded-full mb-6 backdrop-blur-sm border border-chef-gold/30">
            <ChefHat className="text-chef-gold w-12 h-12" />
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-chef-cream mb-4 tracking-tight drop-shadow-lg">
          Savor & Stories
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light">
          Where culinary art meets storytelling. Discover recipes, tales from the kitchen, and the passion behind every plate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onExplore}
            className="px-8 py-3 bg-chef-gold text-chef-black font-bold text-lg rounded-sm hover:bg-yellow-600 transition-colors duration-300"
          >
            Read the Journal
          </button>
          <button 
            onClick={onGenerate}
            className="px-8 py-3 bg-transparent border-2 border-chef-cream text-chef-cream font-bold text-lg rounded-sm hover:bg-chef-cream hover:text-chef-black transition-colors duration-300 backdrop-blur-sm"
          >
            Ask AI Sous Chef
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;