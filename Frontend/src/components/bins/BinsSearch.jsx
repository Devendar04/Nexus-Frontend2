import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const BinsSearch = ({ onSearch }) => {
  return (
    <div className="relative">
      <motion.input
        type="text"
        placeholder="Search bins by location or ID..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 
                 rounded-lg bg-white dark:bg-dark-bg-secondary text-gray-900 
                 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
        initial={{ opacity: 0, width: '0%' }}  
        animate={{ opacity: 1, width: '100%' }}  
        transition={{ duration: 0.9 }} 
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
};

export default BinsSearch;
