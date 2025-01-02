import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar'; // Navigation bar for the dashboard
import { useAuth } from '../../contexts/AuthContext';
import DashboardHome from '../../pages/DashboardHome';
const DashboardLayout = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold text-gray-600 dark:text-gray-300">
          Loading...
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-[90vh] bg-gray-50 dark:bg-dark-bg-primary flex flex-col">
      {/* Navbar */}
      <DashboardNavbar />
      
      {/* Main Content */}
      <div className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4">
        <DashboardHome/>
        </div>
      </div>
   
      {/* Footer (optional) */}
      <footer className="bg-white dark:bg-dark-bg-secondary py-6 mt-auto ">
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} SampurnBin. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;
