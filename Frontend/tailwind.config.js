/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#F5F0E1',
          100: '#E6D5B8',
          200: '#D4BC94',
          300: '#C1A878',
          400: '#B39563',
          500: '#8B7355',
          600: '#6A563F',
          700: '#4A3B24',
          800: '#2C1810',
          900: '#1A0F0A',
        },
        // Light mode colors
        primary: {
          DEFAULT: '#16a34a', // green-600
          hover: '#15803d', // green-700
        },
        // Dark mode specific overrides
        dark: {
          bg: {
            primary: '#111827', // gray-900
            secondary: '#1f2937', // gray-800
          },
          text: {
            primary: '#f9fafb', // gray-50
            secondary: '#e5e7eb', // gray-200
          }
          
        }
      }
    },
  },
  plugins: [  require('tailwind-scrollbar'),
  ],
};