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
        secondary: '#063543',
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
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
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
