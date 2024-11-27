import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); // to manage loading state
  const router = useRouter();

  const backendUrl = 'http://localhost:5000'; // backend URL

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
      axios.defaults.headers.common['x-auth-token'] = storedToken;
    }
    setLoading(false); // finish loading when useEffect is done
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const res = await axios.post(`${backendUrl}/api/auth/login`, { email, password });
      const { token, user } = res.data;

      // Store in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Set in context state
      setToken(token);
      setUser(user);
      
      // Set axios header
      axios.defaults.headers.common['x-auth-token'] = token;

      // Redirect to home
      router.push('/');
    } catch (error) {
      console.error('Login failed', error);
      throw new Error('Login failed');
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      const res = await axios.post(`${backendUrl}/api/auth/register`, userData);
      const { token, user } = res.data;

      // Store in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Set in context state
      setToken(token);
      setUser(user);
      
      // Set axios header
      axios.defaults.headers.common['x-auth-token'] = token;

      // Redirect to home
      router.push('/');
    } catch (error) {
      console.error('Registration failed', error);
      throw new Error('Registration failed');
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    delete axios.defaults.headers.common['x-auth-token'];
    router.push('/login');
  };

  // AuthContext value
  return (
    <AuthContext.Provider value={{ 
      user, 
      token, 
      login, 
      register,
      logout,
      isAuthenticated: !!token,
      loading 
    }}>
      {loading ? <div>Loading...</div> : children} {/* show loading state while fetching data */}
    </AuthContext.Provider>
  );
};
