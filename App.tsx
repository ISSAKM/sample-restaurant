import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import RecipeGenerator from './components/RecipeGenerator';
import Footer from './components/Footer';
import { BlogPost as BlogPostType, ViewState } from './types';
import { INITIAL_POSTS } from './constants';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>(ViewState.HOME);
  const [activePost, setActivePost] = useState<BlogPostType | null>(null);
  const [posts, setPosts] = useState<BlogPostType[]>(INITIAL_POSTS);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [viewState]);

  const handlePostClick = (post: BlogPostType) => {
    setActivePost(post);
    setViewState(ViewState.POST);
  };

  const handleBackToHome = () => {
    setViewState(ViewState.HOME);
    setActivePost(null);
  };

  const handleGenerateClick = () => {
    setViewState(ViewState.GENERATE);
  };

  const handleRecipeGenerated = (newPost: BlogPostType) => {
    setPosts([newPost, ...posts]);
    setActivePost(newPost);
    setViewState(ViewState.POST);
  };

  return (
    <div className="flex flex-col min-h-screen bg-chef-cream">
      <Navbar 
        onHome={handleBackToHome} 
        onGenerate={handleGenerateClick} 
      />

      <main className="flex-grow">
        {viewState === ViewState.HOME && (
          <>
            <Hero 
                onExplore={() => {
                    const blogSection = document.getElementById('blog-list');
                    blogSection?.scrollIntoView({ behavior: 'smooth' });
                }} 
                onGenerate={handleGenerateClick}
            />
            <div id="blog-list">
                <BlogList posts={posts} onPostClick={handlePostClick} />
            </div>
          </>
        )}

        {viewState === ViewState.POST && activePost && (
          <BlogPost post={activePost} onBack={handleBackToHome} />
        )}

        {viewState === ViewState.GENERATE && (
          <RecipeGenerator 
            onRecipeGenerated={handleRecipeGenerated} 
            onCancel={handleBackToHome} 
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;