import React, { useEffect, useState } from 'react';
import { Trash2, MapPin } from 'lucide-react';
import axios from 'axios';
import { motion } from 'framer-motion';  // Import motion from framer-motion

const BinsList = ({ searchQuery, onBinSelect, selectedBinId }) => {
  const [bins, setBins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch bins from the API
  useEffect(() => {
    const fetchBins = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/Bin/bins`); // Replace with your API endpoint
        setBins(response.data.data || []); // Adjust if the response wraps data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBins();
  }, []);

  const filteredBins = bins.filter(bin =>
    bin.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bin.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading bins...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!filteredBins.length) return <p>No bins match your search query.</p>;

  return (
    <div className="space-y-4">
      {filteredBins.map((bin) => (
        <motion.button
          key={bin.data}
          onClick={() => onBinSelect(bin)}
          className={`w-full text-left p-4 rounded-lg shadow-sm ${
            selectedBinId === bin.id
              ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
              : 'bg-white dark:bg-dark-bg-secondary hover:bg-gray-50 dark:hover:bg-gray-800'
          }`}
          initial={{ opacity: 0, y: 26 }}  // Start with slight opacity and move downwards
          animate={{ opacity: 1, y: 0 }}  // Animate to full opacity and normal position
          exit={{ opacity: 0, y: -10 }}  // Fade out and move upwards when removed
          transition={{ type: 'spring', stiffness: 300, damping: 13 }}  // Add smooth transition
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Trash2
                className={
                  bin.status === 'active'
                    ? 'text-green-600 dark:text-green-500'
                    : 'text-gray-400'
                }
              />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {bin.location || 'Unknown Location'}
                </h3>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="w-3 h-3" />
                  <span>{bin.address || 'No address available'}</span>
                </div>
              </div>
            </div>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                bin.status === 'active'
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
              }`}
            >
              {bin.fillLevel || 0}% full
            </span>
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default BinsList;
