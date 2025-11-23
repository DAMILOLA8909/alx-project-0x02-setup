import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Link from 'next/link';

const Index: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ALX Project 2 - Main</title>
        <meta name="description" content="Next.js project with TypeScript and Tailwind CSS" />
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to ALX Project 2!
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            This is the main page - demonstrating Next.js routing
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <Link 
              href="/home" 
              className="bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              Go to Home Page
            </Link>
            <Link 
              href="/about" 
              className="bg-green-600 text-white py-4 px-6 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
            >
              Go to About Page
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Routing Demonstration
            </h2>
            <p className="text-gray-600 mb-4">
              This project now has three pages:
            </p>
            <ul className="text-left list-disc list-inside space-y-2 text-gray-600">
              <li><strong>/</strong> - Main landing page</li>
              <li><strong>/home</strong> - Home page with additional content</li>
              <li><strong>/about</strong> - About page with project information</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;