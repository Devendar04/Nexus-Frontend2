import React from 'react';
import AISection from '../components/features/AISection';
import SolarPowered from '../components/features/SolarPowered';
import RecyclingProcess from '../components/features/RecyclingProcess';
import BenefitsOverview from '../components/features/BenefitsOverview';

const Features = () => {
  return (
    <div className="pt-16 space-y-20">
      
      <BenefitsOverview />
      <AISection />
      <SolarPowered />
      <RecyclingProcess />
    </div>
  );
};

export default Features;