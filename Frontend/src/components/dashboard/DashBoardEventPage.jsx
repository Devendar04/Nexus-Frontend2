import React from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import Container from "../ui/Container";
import DashboardNavbar from "./DashboardNavbar";
const events = [
  {
    id: 1,
    title: "Community Cleanup Drive",
    date: "2024-03-25",
    time: "09:00 AM",
    location: "Central Park",
    participants: 45,
    image: "https://plus.unsplash.com/premium_photo-1663040117567-ab8441cb7b04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENvbW11bml0eSUyMENsZWFudXAlMjBEcml2ZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    title: "Recycling Workshop",
    date: "2024-03-28",
    time: "02:00 PM",
    location: "Community Center",
    participants: 30,
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fFJlY3ljbGluZyUyMFdvcmtzaG9wfGVufDB8fDB8fHww"
  },
  {
    id: 3,
    title: "Green Tech Showcase",
    date: "2024-04-01",
    time: "10:00 AM",
    location: "Innovation Hub",
    participants: 75,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8fG5vY2xlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNjcwNzA4MjU4&ixlib=rb-1.2.1&q=80&w=1080"
  },
];

const DashBoardEventPage = () => {
  return (
    <Container className="py-16 bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-dark-bg-primary">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Upcoming Events
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Join us for exciting and impactful events in our community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-lg overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-56 object-center"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {event.title}
              </h3>
              <div className="mt-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Users className="w-5 h-5 text-green-600" />
                  <span>{event.participants} Participants</span>
                </div>
              </div>
              <button className="mt-6 w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DashBoardEventPage;
