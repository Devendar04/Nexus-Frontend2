import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Calendar, UserCircle } from 'lucide-react';

const DashboardHome = () => {
  const dashboardLinks = [
    {
      path: '/dashboard/track',
      label: 'Track Waste',
      description: 'Monitor and manage waste efficiently.',
      icon: MapPin,
    },
    {
      path: '/dashboard/community',
      label: 'Community',
      description: 'Engage with the community and share insights.',
      icon: Users,
    },
    {
      path: '/dashboard/events',
      label: 'Events',
      description: 'Stay updated with upcoming events.',
      icon: Calendar,
    },
    {
      path: '/dashboard/profile',
      label: 'Profile',
      description: 'Manage your personal information.',
      icon: UserCircle,
    },
  ];

  return (
    <div className="p-6 bg-white dark:bg-dark-bg-primary rounded-md shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Welcome to your Dashboard!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {dashboardLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="p-4 bg-gray-100 dark:bg-dark-bg-secondary rounded-lg shadow hover:shadow-lg transition"
          >
            <link.icon className="w-6 h-6 text-green-500 mb-2" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {link.label}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
