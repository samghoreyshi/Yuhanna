/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-xl': '1302px',
      },
      fontFamily: {
        IranSans: ["IranSans", "sans-serif"],
      },
      fontWeight: {
        medium: 400,   // Corresponds to IranSans Medium
        demiBold: 500,  // Corresponds to IranSans DemiBold
        extraBold: 600,  // Corresponds to IranSans ExtraBold
        extraBlack: 700 // Corresponds to IranSans ExtraBlack
      },
      colors: {
        primary: "#F8F3E9",
        secondary: '#00232D',
        textSecondary: '#497886',
        accent: '#0CAEDD',
      },
      textDirection: {
        rtl: 'rtl',
        ltr: 'ltr',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' }
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        blob: 'blob 7s infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        gradient: 'gradient 8s ease infinite',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.direction-rtl': {
          direction: 'rtl',
        },
        '.direction-ltr': {
          direction: 'ltr',
        },
      });
    },
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp')
  ],
};
