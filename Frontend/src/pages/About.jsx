import React from 'react';
import AboutHero from '../components/about/AboutHero';
import TeamSection from '../components/about/TeamSection';
import Partners from '../components/about/Partners';
import Mission from '../components/about/Mission';
const About = () => {
  return (
    <div className="pt-16 space-y-20">
      <AboutHero />
      <Mission />
      <TeamSection />
      <Partners />
    </div>
  );
};

export default About;