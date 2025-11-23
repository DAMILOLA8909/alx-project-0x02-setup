import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
              ALX Project 2
            </Link>
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
                <Link 
                  href="/" 
                  className={`block py-2 px-4 rounded transition-colors ${
                    isActive('/') ? 'bg-blue-700 font-semibold' : 'hover:bg-blue-500'
                  }`}
                >
                  Main
                </Link>
              </li>
              <li>
                <Link 
                  href="/home" 
                  className={`block py-2 px-4 rounded transition-colors ${
                    isActive('/home') ? 'bg-blue-700 font-semibold' : 'hover:bg-blue-500'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`block py-2 px-4 rounded transition-colors ${
                    isActive('/about') ? 'bg-blue-700 font-semibold' : 'hover:bg-blue-500'
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;