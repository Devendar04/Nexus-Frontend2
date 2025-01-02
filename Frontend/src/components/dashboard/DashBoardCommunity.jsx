import React from "react";
import CommunityFeed from "../community/CommunityFeed";
import SideBar from "../community/SideBar";
import RightSideBar from "../community/RightSideBar";
import DashboardNavbar from "./DashboardNavbar";

const DashBoardCommunity = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-[90vh] bg-[#161f33] ">
          <DashboardNavbar/>
        {/* Left Sidebar */}
        <div className="lg:w-56 w-full lg:h-screen fixed lg:static top-0 bg-gray-900 z-10">
          <SideBar />
        </div>
  
        {/* Main Content */}
        <div className="flex-1 lg:ml-36 lg:mr-20 ml-44 overflow-y-auto h-screen p-4 scrollbar-none">
          <div className="w-full max-w-4xl mx-auto">
            <CommunityFeed />
          </div>
        </div>
  
        {/* Right Sidebar */}
        <div className="lg:w-80 w-full lg:h-screen fixed lg:static top-0 right-0 bg-gray-900 z-10">
          <RightSideBar />
        </div>
      </div>
    );
  };
  
  export default DashBoardCommunity;
  
