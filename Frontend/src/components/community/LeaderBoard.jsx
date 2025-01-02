import React from 'react';
import { Trophy, Medal } from 'lucide-react';
import { motion } from 'framer-motion'; // Import framer-motion

const LeaderBoard = () => {
  const leaders = [
    { name: 'Green Warriors', points: 2500, rank: 1 },
    { name: 'EcoHeroes', points: 2300, rank: 2 },
    { name: 'Sustainability Squad', points: 2100, rank: 3 },
    { name: 'Earth Champions', points: 1900, rank: 4 },
    { name: 'RecyclePros', points: 1800, rank: 5 }
  ];

  return (
    <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-6 h-6 text-green-600 dark:text-green-500" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Community Leaders
        </h2>
      </div>
      <div className="space-y-4">
        {leaders.map((leader) => (
          <motion.div
            key={leader.name}
            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-bg-primary rounded-lg"
            initial={{ opacity: 0 }} // Initial opacity
            animate={{ opacity: 1 }} // Final opacity when element is on screen
            transition={{ duration: 0.5 }} // Animation duration
            whileHover={{ scale: 1.05 }} // Slight scale-up effect on hover
          >
            <div className="flex items-center gap-3">
              <span className="font-bold text-gray-900 dark:text-white">
                {leader.rank}
              </span>
              <span className="text-gray-700 dark:text-gray-300">{leader.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Medal className="w-4 h-4 text-green-600 dark:text-green-500" />
              <span className="font-semibold text-green-600 dark:text-green-500">
                {leader.points}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
