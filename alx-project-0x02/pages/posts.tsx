import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Link from 'next/link';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

const PostsPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Posts - ALX Project 2</title>
        <meta name="description" content="Posts page of ALX Project 2" />
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Posts Page
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-lg text-gray-600 mb-4">
              Welcome to the Posts page! This page demonstrates the reusable components and navigation.
            </p>
            <p className="text-gray-600">
              Explore the different features and components available in this project.
            </p>
          </div>

          {/* Sample Posts */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Sample Posts
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card 
                title="Getting Started with Next.js"
                content="Learn how to set up and configure Next.js for your projects with TypeScript and Tailwind CSS."
                variant="primary"
              />
              
              <Card 
                title="TypeScript Best Practices"
                content="Discover the best practices for using TypeScript in modern web development projects."
                variant="success"
              />
              
              <Card 
                title="Tailwind CSS Components"
                content="Create reusable and responsive components using Tailwind CSS utility classes."
                variant="warning"
              />
              
              <Card 
                title="React Component Patterns"
                content="Explore different React component patterns for building scalable applications."
                variant="secondary"
              />
              
              <Card 
                title="State Management"
                content="Learn about state management solutions in React and Next.js applications."
                variant="danger"
              />
              
              <Card 
                title="API Routes in Next.js"
                content="Understand how to create and use API routes in Next.js for full-stack development."
                variant="primary"
              />
            </div>
          </section>

          {/* Navigation Section */}
          <section className="text-center">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Navigation</h3>
              <p className="text-blue-600 mb-4">
                Use the buttons below to navigate between pages or the header navigation above.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/home" passHref>
                  <Button size="large" variant="primary">
                    Go to Home
                  </Button>
                </Link>
                <Link href="/about" passHref>
                  <Button size="large" variant="success">
                    Go to About
                  </Button>
                </Link>
                <Link href="/" passHref>
                  <Button size="large" variant="outline">
                    Go to Main
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PostsPage;