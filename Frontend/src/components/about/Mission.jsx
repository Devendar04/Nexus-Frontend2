import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Users } from 'lucide-react';
import Container from '../ui/Container';

const Mission = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability First',
      description: 'Committed to environmental preservation through smart waste management.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Empowering communities to take control of their environmental impact.'
    },
    {
      icon: Recycle,
      title: 'Innovation',
      description: 'Using cutting-edge technology to revolutionize waste management.'
    }
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <value.icon className="w-12 h-12 text-green-600 dark:text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Mission;