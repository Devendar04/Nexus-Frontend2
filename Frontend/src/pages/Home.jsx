import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import CallToAction from '../components/home/CallToAction';
import Footer from '../components/layout/Footer';
const Home = () => {
  return (
    <div className="space-y-20 ">
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;