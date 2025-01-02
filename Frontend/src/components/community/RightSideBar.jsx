import React from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion"; // For adding animations

const RightSideBar = () => {
  const suggestions = [
    { id: 1, name: "John Doe", avatar: "https://via.placeholder.com/40" },
    { id: 2, name: "Jane Smith", avatar: "https://via.placeholder.com/40" },
    { id: 3, name: "Alex Johnson", avatar: "https://via.placeholder.com/40" },
  ];

  const trendingTopics = [
    "#ReactJS",
    "#WebDevelopment",
    "#OpenAI",
    "#JavaScript",
    "#TailwindCSS",
  ];

  return (
    <div className="w-72 bg-gray-900 text-white p-4">
      {/* Suggestions Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Suggestions for You</h2>
        <ul className="space-y-1">
          {suggestions.map((user) => (
            <motion.li
              key={user.id}
              className="flex items-center justify-between px-3 py-2 hover:bg-gray-700 rounded-lg"
              whileHover={{ scale: 1.05 }} // Hover animation for item scale
              whileTap={{ scale: 0.95 }}  // Tap animation (scale down)
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-medium">{user.name}</span>
              </div>
              <motion.button
                className="text-green-500 p-1 hover:text-green-400 hover:bg-gray-900 hover:rounded-xl"
                whileHover={{ rotate: 15 }} // Rotate animation for plus icon
                transition={{ duration: 0.3 }}
              >
                <Plus />
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Trending Topics Section */}
      <div className="border-t border-gray-700 w-full py-4">
        <h2 className="text-lg font-semibold mb-4">Trending Topics</h2>
        <ul className="space-y-2 bg-gray-800 p-3 px-5 rounded-xl">
          {trendingTopics.map((topic, index) => (
            <motion.li
              key={index}
              className="text-gray-300 hover:text-white"
              whileHover={{ color: "#10B981" }} // Hover color change for topic
              transition={{ duration: 0.3 }}
            >
              {topic}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSideBar;
