import { useEffect, useRef } from 'react';

export const useAutosave = (data, key, delay = 1000) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      localStorage.setItem(key, JSON.stringify(data));
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [data, key, delay]);

  return {
    getSavedData: () => {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : null;
    },
    clearSavedData: () => {
      localStorage.removeItem(key);
    }
  };
};