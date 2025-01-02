import React from "react";
import CommunityFeed from "../components/community/CommunityFeed";
import EventsList from "../components/community/EventsList";
import LeaderBoard from "../components/community/LeaderBoard";

const Community = () => {
  return (
    <div >
      <div className="grid lg:grid-cols-3 gap-6 p-6">
        <div className="lg:col-span-2">
          <CommunityFeed />
        </div>
        <div className="lg:col-span-1 space-y-6 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-green-600">
          <div className="bg-white dark:bg-dark-bg-secondary p-4 rounded-lg shadow-lg">
            <LeaderBoard />
          </div>
          <div className="bg-white dark:bg-dark-bg-secondary p-4 rounded-lg shadow-lg">
            <EventsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
