import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Link from 'next/link';
import Button from '@/components/common/Button';

const AboutPage: NextPage = () => {
  const handleButtonClick = (message: string) => {
    alert(message);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About - ALX Project 2</title>
        <meta name="description" content="About page of ALX Project 2" />
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            About Page
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">About This Project</h2>
            <p className="text-lg text-gray-600 mb-4">
              This is the About page for ALX Project 2, demonstrating the reusable Button component with different sizes and shapes.
            </p>
            <p className="text-gray-600">
              The project showcases modern web development practices with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>

          {/* Button Component Demonstration */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
              Reusable Button Component
            </h2>
            
            {/* Size Variations */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Size Variations</h3>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <Button 
                  size="small"
                  onClick={() => handleButtonClick('Small button clicked!')}
                >
                  Small Button
                </Button>
                <Button 
                  size="medium"
                  onClick={() => handleButtonClick('Medium button clicked!')}
                >
                  Medium Button
                </Button>
                <Button 
                  size="large"
                  onClick={() => handleButtonClick('Large button clicked!')}
                >
                  Large Button
                </Button>
              </div>
            </div>

            {/* Shape Variations */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Shape Variations</h3>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <Button 
                  shape="rounded-sm"
                  onClick={() => handleButtonClick('Slightly rounded button clicked!')}
                >
                  Slightly Rounded
                </Button>
                <Button 
                  shape="rounded-md"
                  onClick={() => handleButtonClick('Medium rounded button clicked!')}
                >
                  Medium Rounded
                </Button>
                <Button 
                  shape="rounded-full"
                  onClick={() => handleButtonClick('Fully rounded button clicked!')}
                >
                  Fully Rounded
                </Button>
              </div>
            </div>

            {/* Variant Combinations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Variant Combinations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-600">Primary Variant</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button size="small" variant="primary">Small</Button>
                    <Button size="medium" variant="primary">Medium</Button>
                    <Button size="large" variant="primary">Large</Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-600">Success Variant</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button size="small" variant="success" shape="rounded-sm">Small</Button>
                    <Button size="medium" variant="success" shape="rounded-md">Medium</Button>
                    <Button size="large" variant="success" shape="rounded-full">Large</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-600">Outline Variant</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button size="small" variant="outline" shape="rounded-sm">Small</Button>
                    <Button size="medium" variant="outline" shape="rounded-md">Medium</Button>
                    <Button size="large" variant="outline" shape="rounded-full">Large</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-600">Mixed Variants</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button size="small" variant="warning">Warning</Button>
                    <Button size="medium" variant="danger">Danger</Button>
                    <Button size="large" variant="secondary">Secondary</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Disabled State Example */}
          <section className="mb-8">
            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Disabled State</h3>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="medium" 
                  variant="primary" 
                  disabled
                >
                  Disabled Primary
                </Button>
                <Button 
                  size="medium" 
                  variant="success" 
                  disabled
                >
                  Disabled Success
                </Button>
                <Button 
                  size="medium" 
                  variant="outline" 
                  disabled
                >
                  Disabled Outline
                </Button>
              </div>
            </div>
          </section>

          {/* Navigation Section */}
          <section className="text-center">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Navigation</h3>
              <p className="text-blue-600 mb-4">
                Use the buttons below to navigate between pages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/home" passHref>
                  <Button size="large" variant="primary">
                    Go to Home Page
                  </Button>
                </Link>
                <Link href="/" passHref>
                  <Button size="large" variant="outline">
                    Go to Main Page
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

export default AboutPage;