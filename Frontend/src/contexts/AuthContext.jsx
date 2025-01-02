import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // This should be inside Router context
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // This is the setter for user state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Ensure this is inside Router context

  const getToken = () => {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  };

  const fetchUser = useCallback(async () => {
    const token = getToken();
    if (!token) return;

    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.user);
    } catch (err) {
      console.error('Failed to fetch user:', err);
      logout();
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const register = useCallback(async (firstname, lastname, email, password, acceptTerms) => {
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };
  
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/register`, newUser);
  
      if (response.status === 201) {
        const { user, token } = response.data;

        if (user && token) {
          setUser(user);
          
          if (acceptTerms) {
            if (response.data.remember) {
              localStorage.setItem('token', token);
            } else {
              sessionStorage.setItem('token', token);
            }
          }
  
          navigate('/dashboard');
        } else {
          setError('User creation failed. Missing user data or token.');
        }
      } else {
        // Log any unexpected status code
        console.error('Unexpected response status:', response.status);
        setError('Unexpected response from server.');
      }
    } catch (err) {
      console.error('Registration error:', err);
  
      // Handle backend error messages (if any)
      if (err.response) {
        setError(`Error: ${err.response.data.message || err.message}`);
      } else {
        setError('An unknown error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  }, [navigate]);
//******Login*******/
  const login = useCallback(async (email, password, remember) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, {
        email,
        password,
        remember,
      });
      if (response.status === 200) {
        const { user, token } = response.data;
        setUser(user);

        if (remember) {
          localStorage.setItem('token', token);
        } else {
          sessionStorage.setItem('token', token);
        }

        navigate('/dashboard'); // This works because it's inside Router context
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    navigate('/login'); // This works because it's inside Router context
  }, [navigate]);

  const value = {
    user,
    loading,
    error,
    register,
    login,
    logout,
    setUser, // Exposing setUser here
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
