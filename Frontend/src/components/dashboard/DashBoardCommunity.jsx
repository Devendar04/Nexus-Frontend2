import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons from Lucide
import CommunityFeed from "../community/CommunityFeed";
import SideBar from "../community/SideBar";
import RightSideBar from "../community/RightSideBar";
import DashboardNavbar from "./DashboardNavbar";

const DashBoardCommunity = () => {
  // States for toggling the sidebars on mobile
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);

  // Toggle functions for sidebars
  const toggleLeftSidebar = () => setLeftSidebarOpen(!isLeftSidebarOpen);
  const toggleRightSidebar = () => setRightSidebarOpen(!isRightSidebarOpen);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#161f33]">
      {/* Dashboard Navbar */}
      <DashboardNavbar />

      {/* Left Sidebar (Mobile only slider) */}
      <div
        className={`lg:w-56 w-full lg:h-screen bg-gray-900 z-10 fixed top-0 left-0 transition-transform duration-300 ${
          isLeftSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:translate-x-0`}
      >
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-56 lg:mr-80 ml-0 p-4 overflow-y-auto h-screen">
        <div className="w-full max-w-4xl mx-auto">
          <CommunityFeed />
        </div>
      </div>

      {/* Right Sidebar (Mobile only slider) */}
      <div
        className={`lg:w-80 w-full lg:h-screen bg-gray-900 z-10 fixed top-0 right-0 transition-transform duration-300 ${
          isRightSidebarOpen ? "translate-x-0" : "translate-x-full"
        } lg:static lg:translate-x-0`}
      >
        <RightSideBar />
      </div>

      {/* Mobile Toggle Buttons */}
      {/* Left Sidebar Toggle Button */}
      {/* <button
        onClick={toggleLeftSidebar}
        className="lg:hidden fixed top-[80px] left-4 bg-gray-800 text-white p-2 rounded-full z-20"
      >
        <Menu size={24} />
      </button> */}

      {/* Right Sidebar Toggle Button */}
      {/* <button
        onClick={toggleRightSidebar}
        className="lg:hidden fixed top-[80px] right-4 bg-gray-800 text-white p-2 rounded-full z-20"
      >
        <X size={24} />
      </button> */}

     
    </div>
  );
};

export default DashBoardCommunity;
