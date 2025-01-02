import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Network } from 'lucide-react';
import Container from '../ui/Container';

const AISection = () => {
  const features = [
    {
      icon: Brain,
      title: 'Smart Recognition',
      description: 'Advanced waste classification using neural networks'
    },
    {
      icon: Cpu,
      title: 'Real-time Processing',
      description: 'Instant waste analysis and sorting decisions'
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Local processing for faster response times'
    },
    {
      icon: Network,
      title: 'Learning Network',
      description: 'Continuous improvement through distributed learning'
    }
  ];

  return (
    <section className="py-20 bg-warm-50 dark:bg-dark-bg-primary">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-warm-800 dark:text-warm-100 mb-6">
              Powered by Artificial Intelligence
            </h2>
            <p className="text-warm-700 dark:text-warm-200 mb-8">
              Our advanced AI systems revolutionize waste management through intelligent
              sorting, real-time analysis, and continuous learning capabilities.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-4 bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md 
                           hover:shadow-lg transition-shadow duration-300"
                >
                  <feature.icon className="w-8 h-8 text-warm-500 dark:text-warm-300 mb-3" />
                  <h3 className="font-semibold text-warm-800 dark:text-warm-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-warm-600 dark:text-warm-200 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[460px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
              alt="AI Technology"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default AISection;