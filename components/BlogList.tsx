import React from 'react';
import { BlogPost } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface BlogListProps {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
}

const BlogList: React.FC<BlogListProps> = ({ posts, onPostClick }) => {
  return (
    <div className="bg-chef-cream py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-chef-gold font-bold tracking-widest uppercase text-sm">Culinary Journal</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-chef-black mt-2">Latest from the Kitchen</h2>
            <div className="w-24 h-1 bg-chef-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full border border-gray-100"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                {post.isAiGenerated && (
                    <div className="absolute top-3 right-3 bg-chef-gold/90 text-chef-black text-xs font-bold px-2 py-1 rounded-sm flex items-center gap-1 backdrop-blur-sm">
                        <Sparkles className="w-3 h-3" />
                        AI Chef
                    </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold text-chef-gold uppercase tracking-wider mb-3">
                    {post.tags[0]} • {post.date}
                </div>
                <h3 className="text-2xl font-serif font-bold text-chef-black mb-4 leading-tight group-hover:text-chef-gold transition-colors">
                    {post.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 font-sans font-light leading-relaxed flex-1">
                    {post.excerpt}
                </p>
                
                <button 
                  onClick={() => onPostClick(post)}
                  className="flex items-center gap-2 text-chef-black font-bold text-sm uppercase tracking-wide hover:gap-4 transition-all duration-300"
                >
                  Read More <ArrowRight className="w-4 h-4 text-chef-gold" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;