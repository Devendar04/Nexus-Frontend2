import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart, MapPin, Leaf, Recycle } from "lucide-react";
import Container from "../ui/Container";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      icon: Recycle,
      value: "2,500 kg",
      label: "Waste Recycled",
      change: "+12%",
      onClick: () => navigate("/dashboard/track/waste-recycled"),
    },
    {
      icon: Leaf,
      value: "1,200 kg",
      label: "CO₂ Reduced",
      change: "+8%",
      onClick: () => navigate("/dashboard/track/co2-reduced"),
    },
    {
      icon: MapPin,
      value: "15",
      label: "Active Bins",
      change: "+2",
      onClick: () => navigate("/bins"),
    },
    {
      icon: BarChart,
      value: "85%",
      label: "Efficiency",
      change: "+5%",
      onClick: () => navigate("/dashboard/track/efficiency"),
    },
  ];

  return (
    <Container className="py-8">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="bg-white dark:bg-dark-bg-secondary p-6 rounded-lg shadow-lg cursor-pointer"
            onClick={stat.onClick}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <stat.icon className="w-8 h-8 text-green-600 dark:text-green-500" />
              <span className="text-green-600 dark:text-green-500 text-sm font-medium">
                {stat.change}
              </span>
            </div>
            <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </p>
            <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default Dashboard;
