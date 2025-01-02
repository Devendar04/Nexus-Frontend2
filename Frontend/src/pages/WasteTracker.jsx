import React from "react";
import Dashboard from "../components/tracker/Dashboard";
import MapView from "../components/tracker/MapView";
import Statistics from "../components/tracker/Statistics";

const WasteTracker = () => {
  return (
    <div>
      <Dashboard />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-16 mb-5">
        <MapView />
        <Statistics />
      </div>
    </div>
  );
};

export default WasteTracker;
