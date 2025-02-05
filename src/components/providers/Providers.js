'use client';

import { useEffect } from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { ToastProvider, useToast } from '@/components/ui/Toast';
import { setToastFunction } from '@/utils/toast';

function ToastInitializer() {
  const { addToast } = useToast();
  
  useEffect(() => {
    setToastFunction(addToast);
  }, [addToast]);
  
  return null;
}

export function Providers({ children }) {
  return (
    <ToastProvider>
      <AuthProvider>
        <ToastInitializer />
        {children}
      </AuthProvider>
    </ToastProvider>
  );
}
