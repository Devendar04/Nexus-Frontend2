import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const PartnerLogo = ({ partner }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-dark-bg-secondary p-6 rounded-lg shadow-lg"
  >
    <img
      src={partner.logo}
      alt={partner.name}
      className="h-12 w-auto mx-auto filter dark:brightness-90"
    />
    <div className="mt-4 text-center">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {partner.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        {partner.description}
      </p>
    </div>
  </motion.div>
);

const Partners = () => {
  const partners = [
    {
      name: 'EcoTech Solutions',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623',
      description: 'Leading provider of environmental technology solutions'
    },
    {
      name: 'Green Energy Corp',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623',
      description: 'Renewable energy solutions for sustainable operations'
    },
    {
      name: 'Smart City Initiative',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623',
      description: 'Urban development and smart infrastructure partner'
    },
    {
      name: 'Recycle Tech',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623',
      description: 'Advanced recycling technology and solutions'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-bg-primary">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Partners
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Working together with industry leaders to create innovative solutions
            for waste management and environmental sustainability.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <PartnerLogo key={partner.name} partner={partner} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Partners;