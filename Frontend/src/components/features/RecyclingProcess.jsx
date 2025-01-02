import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Filter, Box, Truck } from 'lucide-react';
import Container from '../ui/Container';

const ProcessStep = ({ step, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative"
  >
    <div className="bg-warm-50 dark:bg-dark-bg-secondary p-6 rounded-lg shadow-md 
                  hover:shadow-lg transition-shadow duration-300">
      <step.icon className="w-10 h-10 text-warm-500 dark:text-warm-300 mb-4" />
      <h3 className="text-xl font-semibold text-warm-800 dark:text-warm-100 mb-2">
        {step.title}
      </h3>
      <p className="text-warm-600 dark:text-warm-200">
        {step.description}
      </p>
    </div>
    {index < 3 && (
      <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 
                    bg-warm-300 dark:bg-warm-600 transform translate-x-full">
      </div>
    )}
  </motion.div>
);

const RecyclingProcess = () => {
  const steps = [
    {
      icon: Filter,
      title: 'Smart Sorting',
      description: 'AI-powered waste classification and sorting system'
    },
    {
      icon: Box,
      title: 'Compression',
      description: 'Automatic waste compression for efficient storage'
    },
    {
      icon: Recycle,
      title: 'Processing',
      description: 'Advanced recycling and material recovery'
    },
    {
      icon: Truck,
      title: 'Distribution',
      description: 'Efficient transport to recycling facilities'
    }
  ];

  return (
    <section className="py-20 bg-warm-50 dark:bg-dark-bg-primary">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-warm-800 dark:text-warm-100 mb-4">
              Our Recycling Process
            </h2>
            <p className="text-warm-700 dark:text-warm-200 max-w-2xl mx-auto">
              Experience our streamlined recycling process that ensures maximum
              efficiency and environmental impact.
            </p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default RecyclingProcess;