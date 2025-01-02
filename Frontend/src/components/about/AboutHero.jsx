import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const AboutHero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-dark-bg-primary">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Revolutionizing Waste Management
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            At SampurnBin, we're committed to creating a sustainable future through
            innovative waste management solutions and community engagement.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutHero;