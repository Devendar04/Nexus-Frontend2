import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';

const CallToAction = () => {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-green-900/20 to-green-900/50 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Waste Management?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of communities already using SampurnBin to create a cleaner,
            more sustainable future.
          </p>
          <Link
                          to="/register" className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white 
                           rounded-lg hover:bg-green-700 transition-colors">
            Get Started Today <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default CallToAction;