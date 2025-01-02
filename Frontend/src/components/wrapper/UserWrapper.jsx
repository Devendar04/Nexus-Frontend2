import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { setUser } = useAuth(); // Using the setUser from AuthContext
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    
    if (!token) {
      navigate('/login'); // Redirect to login if no token is found
      setLoading(false);
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.user); // Set user data
        } else {
          localStorage.removeItem('token');
          sessionStorage.removeItem('token');
          navigate('/login'); // Redirect to login if user data is not valid
        }
      })
      .catch(() => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        navigate('/login'); // Redirect to login on error
      })
      .finally(() => {
        setLoading(false); // Set loading to false after the API call completes
      });
  }, [navigate, setUser]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while the API call is in progress
  }

  return <>{children}</>; // Render the protected content once the user is authenticated
};

export default UserProtectWrapper;
