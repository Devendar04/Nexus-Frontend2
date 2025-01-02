//${import.meta.env.VITE_BACKEND_URL}/Bin/binsyy
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapPin, Battery, Trash2, AlertCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const COLORS = ['#16a34a', '#2563eb', '#d97706', '#64748b'];

const BinDetails = ({ bin }) => {
  const [binDetails, setBinDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchBinDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/Bin/getbin?address=${bin.address}`); // Replace with your actual API endpoint
        setBinDetails(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBinDetails();
  }, [bin]);

  if (loading) return <p>Loading bin details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!binDetails) return <p>No bin details available</p>;

  return (
    <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-lg p-6">
       {binDetails.map((bin) => (

         <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {bin.location || 'Unknown Location'}
            </h2>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <MapPin className="w-4 h-4" />
              
              <span>{bin.address || 'No address available'}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Battery Level */}
            <div className="p-4 bg-gray-50 dark:bg-dark-bg-primary rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Battery className="w-4 h-4 text-green-600 dark:text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Battery</span>
              </div>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {bin.batteryLevel || 0}%
              </p>
            </div>

            {/* Fill Level */}
            <div className="p-4 bg-gray-50 dark:bg-dark-bg-primary rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Trash2 className="w-4 h-4 text-green-600 dark:text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Fill Level</span>
              </div>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {bin.fillLevel || 0}%
              </p>
            </div>
          </div>

          {/* Status Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Status Information
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-bg-primary rounded-lg">
                <span className="text-gray-600 dark:text-gray-300">Last Emptied</span>
                <span className="text-gray-900 dark:text-white">
                  {bin.lastEmptied
                    ? new Date(bin.lastEmptied).toLocaleString()
                    : 'Not available'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-bg-primary rounded-lg">
                <span className="text-gray-600 dark:text-gray-300">Temperature</span>
                <span className="text-gray-900 dark:text-white">
                  {bin.temperature || 0}°C
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Waste Composition */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Waste Composition
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={bin.wasteTypes || []}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    >
                    {(bin.wasteTypes || []).map((entry, index) => (
                      <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {(bin.wasteTypes || []).map((type, index) => (
                <div key={type.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {type.name}: {type.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts */}
          {bin.alerts && bin.alerts.length > 0 ? (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Alerts
              </h3>
              <div className="space-y-2">
                {bin.alerts.map((alert, index) => (
                  <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 
                  text-red-700 dark:text-red-200 rounded-lg"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>{alert}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-600 dark:text-gray-300">No alerts at the moment.</p>
          )}
        </div>
      </div>
  ))}
    </div>
  );
};

export default BinDetails;
