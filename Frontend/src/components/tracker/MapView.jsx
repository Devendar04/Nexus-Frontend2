import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Trash2 } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { motion } from 'framer-motion';

// Fix for default marker icons in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapView = () => {
  // Mock data - replace with actual API data
  const bins = [
    {
      id: 1,
      location: "Block A",
      coordinates: [24.61896207319831, 73.854558],
      fillLevel: 75,
      status: "active",
    },
    {
      id: 2,
      location: "Block B",
      coordinates: [24.61915106319831, 73.855348],
      fillLevel: 75,
      status: "active",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const popupVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-lg p-4"
    >
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Bin Locations
      </h2>
      <div className="h-[400px] rounded-lg overflow-hidden">
        <MapContainer
          center={[24.61915106319831, 73.85504867942632]}
          zoom={17}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {bins.map((bin) => (
            <motion.div
              key={bin.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              <Marker position={bin.coordinates}>
                <Popup>
                  <motion.div
                    variants={popupVariants}
                    initial="hidden"
                    animate="visible"
                    className="p-2"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Trash2
                        className={
                          bin.status === 'active'
                            ? 'text-green-600'
                            : 'text-gray-400'
                        }
                      />
                      <h3 className="font-semibold">{bin.location}</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Fill Level: {bin.fillLevel}%
                    </p>
                    <p className="text-sm text-gray-600">
                      Status: {bin.status}
                    </p>
                  </motion.div>
                </Popup>
              </Marker>
            </motion.div>
          ))}
        </MapContainer>
      </div>
    </motion.div>
  );
};

export default MapView;
