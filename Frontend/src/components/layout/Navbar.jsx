import React, { useState } from 'react';
import { Menu, X, Recycle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Track Waste', href: '/tracker' },
    { name: 'Community', href: '/community' },
    { name: 'Contact', href: '/contact' }
  ];

  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  return (
    <nav className="bg-white dark:bg-dark-bg-primary shadow-lg fixed w-full z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Recycle className="h-8 w-8 text-green-600 dark:text-green-500" />
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-gray-100">
                SampurnBin
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-green-600 
                         dark:hover:text-green-500 px-3 py-2 rounded-md text-sm 
                         font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            {!isAuthPage && (
              <Link
                to="/login"
                className="bg-green-600 dark:bg-green-500 text-white px-4 py-2 
                         rounded-md text-sm font-medium hover:bg-green-700 
                         dark:hover:bg-green-600 transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 
                       dark:hover:text-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark-bg-primary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-green-600 
                         dark:hover:text-green-500 block px-3 py-2 rounded-md 
                         text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {!isAuthPage && (
              <Link
                to="/login"
                className="block w-full bg-green-600 dark:bg-green-500 text-white px-4 
                         py-2 rounded-md text-sm font-medium hover:bg-green-700 
                         dark:hover:bg-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;