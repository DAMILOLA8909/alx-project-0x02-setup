import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Link from 'next/link';

const AboutPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About - ALX Project 2</title>
        <meta name="description" content="About page of ALX Project 2" />
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            About Page
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">About This Project</h2>
            <p className="text-lg text-gray-600 mb-4">
              This is the About page for ALX Project 2, demonstrating basic routing in Next.js.
            </p>
            <p className="text-gray-600">
              The project is built with Next.js, TypeScript, and Tailwind CSS, showcasing modern web development practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">Next.js</div>
              <p className="text-purple-500">React Framework</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">TypeScript</div>
              <p className="text-blue-500">Type Safety</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-teal-600 mb-2">Tailwind</div>
              <p className="text-teal-500">CSS Framework</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/home" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mr-4"
            >
              Go to Home Page
            </Link>
            <Link 
              href="/" 
              className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Go to Main Page
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;