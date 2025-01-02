import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sun, Recycle, LineChart } from 'lucide-react';
import Container from '../ui/Container';

const BenefitsOverview = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'AI-Powered Sorting',
      description: 'Advanced algorithms for precise waste segregation'
    },
    {
      icon: Sun,
      title: 'Solar Powered',
      description: 'Eco-friendly operation using renewable energy'
    },
    {
      icon: Recycle,
      title: 'Smart Recycling',
      description: 'Efficient processing of recyclable materials'
    },
    {
      icon: LineChart,
      title: 'Real-time Analytics',
      description: 'Detailed insights into waste management metrics'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-dark-bg-primary">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Smart Features for a Sustainable Future
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how our innovative features are transforming waste management
            and contributing to a cleaner environment.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-bg-secondary p-6 rounded-lg shadow-lg"
            >
              <benefit.icon className="w-12 h-12 text-green-600 dark:text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BenefitsOverview;