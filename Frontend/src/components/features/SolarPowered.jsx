import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, Zap, Leaf } from 'lucide-react';
import Container from '../ui/Container';

const SolarPowered = () => {
  const benefits = [
    {
      icon: Sun,
      title: 'Solar Energy',
      description: '100% renewable energy powered operations'
    },
    {
      icon: Battery,
      title: 'Energy Storage',
      description: 'Advanced battery systems for 24/7 operation'
    },
    {
      icon: Zap,
      title: 'Efficient Usage',
      description: 'Optimized power consumption and management'
    },
    {
      icon: Leaf,
      title: 'Zero Emissions',
      description: 'Carbon-neutral waste management solution'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-dark-bg-secondary">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 relative h-[460px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
              alt="Solar Powered Technology"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl font-bold text-warm-800 dark:text-warm-100 mb-6">
              Sustainable Solar Power
            </h2>
            <p className="text-warm-700 dark:text-warm-200 mb-8">
              Our smart bins harness solar energy to power advanced waste management
              features while maintaining zero carbon emissions.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-4 bg-warm-50 dark:bg-dark-bg-primary rounded-lg shadow-md 
                           hover:shadow-lg transition-shadow duration-300"
                >
                  <benefit.icon className="w-8 h-8 text-warm-500 dark:text-warm-300 mb-3" />
                  <h3 className="font-semibold text-warm-800 dark:text-warm-100 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-warm-600 dark:text-warm-200 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default SolarPowered;