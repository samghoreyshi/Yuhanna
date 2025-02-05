'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { showToast } from '@/utils/toast';

const API_URL = 'https://admin.yuhanna.ir/api';

const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await fetch(`${API_URL}/users/me`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          localStorage.removeItem('token');
          setUser(null);
        }
      }
      setLoading(false);
    } catch (error) {
      console.error('Error checking user:', error);
      localStorage.removeItem('token');
      setUser(null);
      setLoading(false);
    }
  };

  const login = async (token, initialUserData) => {
    try {
      localStorage.setItem('token', token);
      
      // Fetch complete user data after login
      const response = await fetch(`${API_URL}/users/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await response.json();
      setUser(userData);
      showToast('با موفقیت وارد شدید', 'success');
      router.push('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
      localStorage.removeItem('token');
      setUser(null);
      showToast('خطا در ورود به حساب', 'error');
      throw error; // Re-throw to handle in the form
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    showToast('با موفقیت خارج شدید', 'info');
    router.push('/');
  };

  const register = async (token, initialUserData) => {
    try {
      localStorage.setItem('token', token);
      
      // Fetch complete user data after registration
      const response = await fetch(`${API_URL}/users/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await response.json();
      setUser(userData);
      showToast('ثبت نام با موفقیت انجام شد', 'success');
      router.push('/dashboard');
    } catch (error) {
      console.error('Error registering:', error);
      localStorage.removeItem('token');
      setUser(null);
      showToast('خطا در ثبت نام', 'error');
      throw error; // Re-throw to handle in the form
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
