import React from 'react';
import { Home, TrendingUp, RefreshCcw, FileText, Settings } from 'lucide-react';
import { motion } from 'framer-motion'; // Import framer-motion for animation

const SideBar = () => {
  return (
    <div className="w-72 h-screen bg-gray-900 text-white flex flex-col shadow-lg">
      {/* Profile Section */}
      <div className="p-6 flex items-center gap-4 border-b border-gray-700">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-lg font-bold">John Doe</h2>
          <p className="text-sm text-gray-400">johndoe@example.com</p>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex-1 py-4 px-6 space-y-4">
        <h3 className="text-sm uppercase tracking-wide text-gray-500">Navigation</h3>
        <ul className="space-y-3">
          <motion.li
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700"
            whileHover={{ scale: 1.05 }} // Hover animation (scale up)
            whileTap={{ scale: 0.95 }}  // Tap animation (scale down)
            transition={{ duration: 0.2 }}
          >
            <Home className="w-5 h-5 text-green-500" />
            <span>My Feed</span>
          </motion.li>
          <motion.li
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <TrendingUp className="w-5 h-5 text-blue-500" />
            <span>Trending</span>
          </motion.li>
          <motion.li
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <RefreshCcw className="w-5 h-5 text-yellow-500" />
            <span>Fresh</span>
          </motion.li>
          <motion.li
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <FileText className="w-5 h-5 text-purple-500" />
            <span>Drafts</span>
          </motion.li>
        </ul>
      </div>

      {/* Settings Section */}
      <div className="py-4 px-6 border-t border-gray-700 mb-[9vh]">
        <motion.button
          className="flex items-center gap-3 w-full text-left p-2 rounded-md hover:bg-gray-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Settings className="w-5 h-5 text-gray-500" />
          <span>Settings</span>
        </motion.button>
      </div>
    </div>
  );
};

export default SideBar;
