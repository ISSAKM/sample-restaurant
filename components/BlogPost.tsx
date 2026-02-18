import React from 'react';
import ReactMarkdown from 'react-markdown';
import { BlogPost as BlogPostType } from '../types';
import { ArrowLeft, Clock, User, Calendar, Tag } from 'lucide-react';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  return (
    <div className="bg-chef-cream min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-chef-gold transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </button>

        <article className="bg-white shadow-xl rounded-sm overflow-hidden border border-gray-100">
            {/* Header Image */}
            <div className="h-[400px] w-full overflow-hidden relative">
                <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                />
                {post.isAiGenerated && (
                    <div className="absolute top-4 right-4 bg-chef-gold text-chef-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        AI Generated
                    </div>
                )}
            </div>

            <div className="p-8 md:p-12">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6 font-sans">
                    <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-chef-gold" />
                        {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                        <User className="w-4 h-4 text-chef-gold" />
                        {post.author}
                    </span>
                    <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-chef-gold" />
                        5 min read
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-chef-black mb-8 leading-tight">
                    {post.title}
                </h1>

                {/* Tags */}
                <div className="flex gap-2 mb-10 flex-wrap">
                    {post.tags.map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-chef-black prose-p:text-gray-600 prose-a:text-chef-gold prose-blockquote:border-l-chef-gold prose-blockquote:bg-chef-cream prose-blockquote:py-2 prose-blockquote:px-4 prose-img:rounded-lg">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;