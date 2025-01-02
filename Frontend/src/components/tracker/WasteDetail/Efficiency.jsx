import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart, TrendingUp } from "lucide-react";
import Container from "../../ui/Container";

const efficiencyData = {
  weekly: [
    { week: "Week 1", efficiency: "82%", date: "1st - 7th" },
    { week: "Week 2", efficiency: "85%", date: "8th - 14th" },
    { week: "Week 3", efficiency: "80%", date: "15th - 21st" },
    { week: "Week 4", efficiency: "86%", date: "22nd - 28th" },
  ],
  monthly: [
    { month: "January", efficiency: "83%" },
    { month: "February", efficiency: "85%" },
    { month: "March", efficiency: "88%" },
  ],
};

const Efficiency = () => {
  const [view, setView] = useState("weekly");

  return (
    <Container className="py-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Efficiency
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Track efficiency metrics for the past week or month.
        </p>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          className={`px-4 py-2 rounded-lg font-medium mx-2 ${
            view === "weekly"
              ? "bg-green-600 text-white"
              : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          }`}
          onClick={() => setView("weekly")}
        >
          Weekly
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium mx-2 ${
            view === "monthly"
              ? "bg-green-600 text-white"
              : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          }`}
          onClick={() => setView("monthly")}
        >
          Monthly
        </button>
      </div>

      <div className="mt-10">
        <AnimatePresence mode="wait">
          {view === "weekly" && (
            <motion.div
              key="weekly"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {efficiencyData.weekly.map((item) => (
                <motion.div
                  key={item.week}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                >
                  <BarChart className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.efficiency}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.week}</p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.date}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
          {view === "monthly" && (
            <motion.div
              key="monthly"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {efficiencyData.monthly.map((item) => (
                <motion.div
                  key={item.month}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                >
                  <TrendingUp className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.efficiency}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.month}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default Efficiency;
