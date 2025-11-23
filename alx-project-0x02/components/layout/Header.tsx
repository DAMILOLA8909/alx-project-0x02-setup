import React from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">ALX Project 2</h1>
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <a 
                  href="/" 
                  className={`block py-2 px-4 rounded transition-colors ${
                    router.pathname === '/' ? 'bg-blue-700' : 'hover:bg-blue-500'
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className={`block py-2 px-4 rounded transition-colors ${
                    router.pathname === '/about' ? 'bg-blue-700' : 'hover:bg-blue-500'
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className={`block py-2 px-4 rounded transition-colors ${
                    router.pathname === '/contact' ? 'bg-blue-700' : 'hover:bg-blue-500'
                  }`}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="/projects" 
                  className={`block py-2 px-4 rounded transition-colors ${
                    router.pathname === '/projects' ? 'bg-blue-700' : 'hover:bg-blue-500'
                  }`}
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;