/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IranSans: ["IranSans", "sans-serif"],
      },
      fontWeight: {
        medium: 400,   // Corresponds to IranSans Medium
        demiBold: 600,  // Corresponds to IranSans DemiBold
        extraBlack: 700 // Corresponds to IranSans ExtraBlack
      },
      colors: {
        primary: "#F8F3E9",
        secondary: '#F9F9F9',
        accent: '#3D9CFB',
      },
      textDirection: {
        rtl: 'rtl',
        ltr: 'ltr',
      },
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
  ],
};