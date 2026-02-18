import React, { useState, useEffect } from 'react';
import { Menu, X, ChefHat, Sparkles } from 'lucide-react';

interface NavbarProps {
  onHome: () => void;
  onGenerate: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHome, onGenerate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-chef-black/95 shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={onHome} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <ChefHat className={`w-8 h-8 transition-colors ${isScrolled ? 'text-chef-gold' : 'text-chef-cream group-hover:text-chef-gold'}`} />
          <span className={`text-2xl font-serif font-bold tracking-wide ${isScrolled ? 'text-chef-cream' : 'text-white'}`}>
            Savor<span className="text-chef-gold">&</span>Stories
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={onHome} className={`text-sm font-bold uppercase tracking-widest hover:text-chef-gold transition-colors ${isScrolled ? 'text-gray-300' : 'text-white'}`}>
            Journal
          </button>
          <button className={`text-sm font-bold uppercase tracking-widest hover:text-chef-gold transition-colors ${isScrolled ? 'text-gray-300' : 'text-white'}`}>
            Menu
          </button>
          <button className={`text-sm font-bold uppercase tracking-widest hover:text-chef-gold transition-colors ${isScrolled ? 'text-gray-300' : 'text-white'}`}>
            Reservations
          </button>
          <button 
            onClick={onGenerate}
            className="flex items-center gap-2 bg-chef-gold/90 hover:bg-chef-gold text-chef-black px-4 py-2 rounded-sm font-bold transition-all transform hover:scale-105"
          >
            <Sparkles className="w-4 h-4" />
            AI Sous Chef
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-chef-gold transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-chef-black border-t border-gray-800 animate-fade-in-down">
          <div className="flex flex-col p-6 gap-4">
             <button onClick={() => { onHome(); setIsMobileMenuOpen(false); }} className="text-gray-300 hover:text-chef-gold text-left text-lg font-serif">Journal</button>
             <button className="text-gray-300 hover:text-chef-gold text-left text-lg font-serif">Menu</button>
             <button className="text-gray-300 hover:text-chef-gold text-left text-lg font-serif">Reservations</button>
             <button onClick={() => { onGenerate(); setIsMobileMenuOpen(false); }} className="text-chef-gold font-bold text-left text-lg font-serif flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Ask AI Sous Chef
             </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;