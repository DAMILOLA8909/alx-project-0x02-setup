import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Link from 'next/link';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { type PostData } from '@/interfaces';
import { useState } from 'react';

const HomePage: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostData[]>([]);

  const handleSavePost = (postData: Omit<PostData, 'id' | 'createdAt'>) => {
    const newPost: PostData = {
      id: Date.now(), // Simple ID generation
      title: postData.title,
      content: postData.content,
      createdAt: new Date()
    };
    
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Home - ALX Project 2</title>
        <meta name="description" content="Home page of ALX Project 2" />
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              Home Page
            </h1>
            <button
              onClick={openModal}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Create Post</span>
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-lg text-gray-600 mb-4">
              Welcome to the Home page! This page demonstrates the reusable Card component and dynamic content updates.
            </p>
            <p className="text-gray-600">
              Click the "Create Post" button to add new content dynamically to this page.
            </p>
          </div>

          {/* Dynamic Posts Section */}
          {posts.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                Dynamic Posts ({posts.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Card
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    variant="primary"
                    className="animate-fade-in"
                  />
                ))}
              </div>
            </section>
          )}

          {/* Card Component Demonstration */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Reusable Card Components
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card 
                title="Default Card"
                content="This is a default card with basic styling. It demonstrates the reusable Card component accepting title and content props."
              />
              
              <Card 
                title="Primary Card"
                content="This card uses the primary variant with blue styling. Perfect for important information or main features."
                variant="primary"
              />
              
              <Card 
                title="Success Card"
                content="Success variant with green styling. Ideal for positive messages, completed tasks, or successful operations."
                variant="success"
              />
            </div>
          </section>

          {/* Navigation Section */}
          <section className="text-center">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Navigation</h3>
              <p className="text-blue-600 mb-4">
                Use the header navigation to explore different pages or click the buttons below.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/about" 
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                >
                  Go to About Page
                </Link>
                <Link 
                  href="/" 
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                >
                  Go to Main Page
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Post Modal */}
      <PostModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSavePost}
      />
    </div>
  );
};

export default HomePage;