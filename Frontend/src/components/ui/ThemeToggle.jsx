import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 
                 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-5 h-5" aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggle;