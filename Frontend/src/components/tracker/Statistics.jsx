import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const Statistics = () => {
  // Mock data - replace with actual API data
  const data = [
    { name: 'Mon', plastic: 40, paper: 24, metal: 10 },
    { name: 'Tue', plastic: 30, paper: 13, metal: 15 },
    { name: 'Wed', plastic: 20, paper: 38, metal: 25 },
    { name: 'Thu', plastic: 27, paper: 39, metal: 20 },
    { name: 'Fri', plastic: 18, paper: 48, metal: 30 },
    { name: 'Sat', plastic: 23, paper: 38, metal: 25 },
    { name: 'Sun', plastic: 34, paper: 43, metal: 15 },
  ];

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-lg p-4 sm:p-6 md:p-8"
    >
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Weekly Waste Collection
      </h2>
      <div className="h-[300px] sm:h-[350px] md:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="plastic" fill="#16a34a" name="Plastic" animationDuration={1000} />
            <Bar dataKey="paper" fill="#2563eb" name="Paper" animationDuration={1200} />
            <Bar dataKey="metal" fill="#d97706" name="Metal" animationDuration={1400} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default Statistics;
