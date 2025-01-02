import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Users, UserCircle, Calendar, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import ThemeToggle from '../ui/ThemeToggle';

const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { icon: MapPin, label: 'Track Waste', path: '/dashboard/track' },
    { icon: Users, label: 'Community', path: '/dashboard/community' },
    { icon: Calendar, label: 'Events', path: '/dashboard/events' },
    { icon: UserCircle, label: 'Profile', path: '/dashboard/profile' },
  ];

  return (
    <nav className="fixed top-0 w-full py-1 bg-white dark:bg-dark-bg-primary shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="font-bold text-xl text-green-600">
            SampurnBin
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 text-sm ${
                  location.pathname === item.path
                    ? 'text-green-600 dark:text-green-500'
                    : 'text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
            <ThemeToggle />
            <button
              onClick={logout}
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 
                       hover:text-red-600 dark:hover:text-red-500"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
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
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 text-base px-3 py-2 rounded-md ${
                  location.pathname === item.path
                    ? 'text-green-600 dark:text-green-500'
                    : 'text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 w-full text-sm text-gray-600 dark:text-gray-400 
                       hover:text-red-600 dark:hover:text-red-500 px-3 py-2 rounded-md"
              
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashboardNavbar;
