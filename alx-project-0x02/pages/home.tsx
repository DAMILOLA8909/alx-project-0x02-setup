import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Link from 'next/link';
import Card from '@/components/common/Card';

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Home - ALX Project 2</title>
        <meta name="description" content="Home page of ALX Project 2" />
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Home Page
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-lg text-gray-600 mb-4">
              Welcome to the Home page! This page demonstrates the reusable Card component.
            </p>
            <p className="text-gray-600">
              Below you can see different Card components with various props and variants.
            </p>
          </div>

          {/* Card Component Demonstration */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card 
                title="Warning Card"
                content="Warning variant with yellow styling. Use this for alerts, cautions, or important notices that need attention."
                variant="warning"
              />
              
              <Card 
                title="Danger Card"
                content="Danger variant with red styling. Suitable for error messages, critical alerts, or destructive actions."
                variant="danger"
              />
            </div>
          </section>

          {/* Feature Cards */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
              Project Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card 
                title="Next.js Framework"
                content="Built with Next.js for optimal performance, SEO, and developer experience. Includes both server-side and client-side rendering capabilities."
                variant="primary"
              />
              
              <Card 
                title="TypeScript Integration"
                content="Full TypeScript support for type safety, better development experience, and reduced runtime errors."
                variant="secondary"
              />
              
              <Card 
                title="Tailwind CSS"
                content="Utility-first CSS framework for rapid UI development with responsive design and consistent styling."
                variant="success"
              />
              
              <Card 
                title="Component Architecture"
                content="Modular and reusable component structure that promotes code maintainability and scalability."
                variant="primary"
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
    </div>
  );
};

export default HomePage;