import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ALX Project 2</title>
        <meta name="description" content="Next.js project with TypeScript and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to ALX Project 2!
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            This is a Next.js project with TypeScript and Tailwind CSS
          </p>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Project Features
            </h2>
            <ul className="text-left list-disc list-inside space-y-2 text-gray-600">
              <li>Next.js with Pages Router</li>
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS for styling</li>
              <li>ESLint for code quality</li>
              <li>Organized folder structure</li>
              <li>Responsive design</li>
            </ul>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Pages Router</h3>
              <p className="text-blue-600">This project uses the Pages Router for routing structure.</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-2">TypeScript</h3>
              <p className="text-green-600">Fully typed with TypeScript for better development experience.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ALX Project 2. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;