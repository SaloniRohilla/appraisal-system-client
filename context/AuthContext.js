import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

// Create the AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  // Set your backend URL
  const backendUrl = 'http://localhost:5000'; // Update to your backend URL

  // Load stored token and user on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
      axios.defaults.headers.common['x-auth-token'] = storedToken;
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const res = await axios.post(`${backendUrl}/api/auth/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      
      setToken(res.data.token);
      setUser(res.data.user);
      
      axios.defaults.headers.common['x-auth-token'] = res.data.token;
      router.push('/');
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      const res = await axios.post(`${backendUrl}/api/auth/register`, userData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      
      setToken(res.data.token);
      setUser(res.data.user);
      
      axios.defaults.headers.common['x-auth-token'] = res.data.token;
      router.push('/');
    } catch (error) {
      console.error('Registration failed', error);
      throw error;
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
      isAuthenticated: !!token 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
