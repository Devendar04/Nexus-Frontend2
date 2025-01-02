import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../layout/Navbar'; // Navbar for public routes
import DashboardNavbar from '../dashboard/DashboardNavbar'; // Navbar for dashboard routes

const NavbarWrapper = () => {
  const location = useLocation();

  const isDashboardRoute = location.pathname.startsWith('/profile');
  

  return (
    <>
      {isDashboardRoute ? <DashboardNavbar /> : <Navbar />}
      <Outlet />
    </>
  );
};

export default NavbarWrapper;
