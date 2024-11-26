import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
      axios.defaults.headers.common['x-auth-token'] = storedToken;
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
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

  const register = async (userData) => {
    try {
      const res = await axios.post('/api/auth/register', userData);
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

  return (
    <AuthContext.Provider value={{ 
      user, 
      token, 
      login, 
      register,
      isAuthenticated: !!token 
    }}>
      {children}
    </AuthContext.Provider>
  );
};