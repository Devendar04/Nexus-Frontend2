import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, MapPin, Users, Recycle } from 'lucide-react';
import Container from '../ui/Container';

const features = [
  {
    icon: BarChart2,
    title: 'Real-time Analytics',
    description: 'Track and analyze waste management metrics with powerful visualization tools.'
  },
  {
    icon: MapPin,
    title: 'Location Tracking',
    description: 'Monitor waste collection routes and optimize for maximum efficiency.'
  },
  {
    icon: Users,
    title: 'Community Engagement',
    description: 'Connect with your community and promote sustainable practices.'
  },
  {
    icon: Recycle,
    title: 'Sustainable Solutions',
    description: 'Implement eco-friendly waste management strategies.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-bg-secondary">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Key Features
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how our smart waste management solutions can help your community.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-bg-primary p-6 rounded-lg shadow-lg 
                         hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-green-600 dark:text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;