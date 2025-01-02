import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Container from '../ui/Container';

const TeamMember = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-lg p-6 text-center"
  >
    <img
      src={member.image}
      alt={member.name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      {member.name}
    </h3>
    <p className="text-green-600 dark:text-green-500 mb-4">{member.role}</p>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
    <div className="flex justify-center gap-4">
      {member.social.github && (
        <a href={member.social.github} className="text-gray-600 dark:text-gray-400 hover:text-green-600">
          <Github className="w-5 h-5" />
        </a>
      )}
      {member.social.linkedin && (
        <a href={member.social.linkedin} className="text-gray-600 dark:text-gray-400 hover:text-green-600">
          <Linkedin className="w-5 h-5" />
        </a>
      )}
      {member.social.twitter && (
        <a href={member.social.twitter} className="text-gray-600 dark:text-gray-400 hover:text-green-600">
          <Twitter className="w-5 h-5" />
        </a>
      )}
    </div>
  </motion.div>
);

const TeamSection = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Passionate about sustainable technology and environmental conservation.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Expert in IoT solutions and smart waste management systems.',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      bio: 'Specializes in implementing efficient waste management strategies.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Dedicated professionals working together to revolutionize waste management
            and create a sustainable future.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;