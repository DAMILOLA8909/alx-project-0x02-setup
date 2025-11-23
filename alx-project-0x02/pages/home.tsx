import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Home - ALX Project 2</title>
        <meta name="description" content="Home page of ALX Project 2" />
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Home Page
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <p className="text-lg text-gray-600 mb-4">
              Welcome to the Home page! This is a dedicated page for home content.
            </p>
            <p className="text-gray-600">
              This page demonstrates basic routing in Next.js using the Pages Router.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h2 className="text-xl font-semibold text-blue-800 mb-3">Features</h2>
              <ul className="list-disc list-inside space-y-2 text-blue-600">
                <li>Next.js Pages Router</li>
                <li>TypeScript Support</li>
                <li>Tailwind CSS Styling</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h2 className="text-xl font-semibold text-green-800 mb-3">Navigation</h2>
              <p className="text-green-600 mb-3">
                Use the header navigation to move between pages.
              </p>
              <Link 
                href="/about" 
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Go to About Page
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;