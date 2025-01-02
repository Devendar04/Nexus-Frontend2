import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Users, UserCircle, Calendar, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import ThemeToggle from '../ui/ThemeToggle';

const DashboardNavbar = () => {
  const { logout } = useAuth();
  const location = useLocation();
  
  const navItems = [
    { icon: MapPin, label: 'Track Waste', path: '/dashboard/track' },
    { icon: Users, label: 'Community', path: '/dashboard/community' },
    { icon: Calendar, label: 'Events', path: '/dashboard/events' },
    { icon: UserCircle, label: 'Profile', path: '/dashboard/profile' },
  ];

  return (
    <nav className="fixed top-0 w-full py-1 bg-white dark:bg-dark-bg-primary shadow-sm z-50 ">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-between h-16 ">
          <Link to="/dashboard" className="font-bold text-xl text-green-600">
            SampurnBin
          </Link>

          <div className="flex items-center gap-10">
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
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;