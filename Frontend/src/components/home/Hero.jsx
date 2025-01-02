import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../ui/Container';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center  scrollbar scrollbar-track-green-600">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Smart Waste Management for a{' '}
              <span className="text-green-600 dark:text-green-500">Cleaner Future</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Transform your community's waste management with intelligent tracking,
              real-time analytics, and sustainable solutions.
            </p>
            <div className="flex gap-4">
              <Link
                to="/register"
                className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 
                         text-white rounded-lg transition-colors"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 
                         hover:border-green-600 dark:hover:border-green-500 rounded-lg 
                         transition-colors"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b"
              alt="Sustainable waste management"
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;