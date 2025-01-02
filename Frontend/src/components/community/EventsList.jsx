import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion'; // Import framer-motion

const EventsList = () => {
  // Mock data - replace with actual API data
  const events = [
    {
      id: 1,
      title: 'Community Cleanup Drive',
      date: '2024-03-25',
      time: '09:00 AM',
      location: 'Central Park',
      participants: 45
    },
    {
      id: 2,
      title: 'Recycling Workshop',
      date: '2024-03-28',
      time: '02:00 PM',
      location: 'Community Center',
      participants: 30
    },
    {
      id: 3,
      title: 'Green Tech Showcase',
      date: '2024-04-01',
      time: '10:00 AM',
      location: 'Innovation Hub',
      participants: 75
    }
  ];

  return (
    <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-6 h-6 text-green-600 dark:text-green-500" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Upcoming Events
        </h2>
      </div>

      <div className="space-y-4">
        {events.map(event => (
          <motion.div
            key={event.id}
            className="p-4 bg-gray-50 dark:bg-dark-bg-primary rounded-lg"
            initial={{ opacity: 0, y: 20 }} // Initial state (hidden and slightly below)
            animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
            transition={{ duration: 0.5 }} // Smooth fade-in and slide-up
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              {event.title}
            </h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Users className="w-4 h-4" />
                <span>{event.participants} participants</span>
              </div>
            </div>

            <motion.button
              className="mt-3 w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm"
              whileHover={{ scale: 1.05 }} // Scale up on hover
              whileTap={{ scale: 0.95 }}  // Scale down on click
            >
              Join Event
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
