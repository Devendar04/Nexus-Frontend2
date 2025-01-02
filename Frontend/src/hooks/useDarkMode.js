import { useState, useEffect } from 'react';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Fall back to system preference
    return window.matchMedia(COLOR_SCHEME_QUERY).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY);
    const handleChange = (event) => {
      // Only update if no theme is saved in localStorage
      if (!localStorage.getItem('theme')) {
        setIsDark(event.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return [isDark, setIsDark];
}