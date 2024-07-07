/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontSize: {
    //   base: '16px',
    // },

    extend: {
      screens: {
        '1md': '889px',
      },

      fontFamily: {
        'my-custom-font-head': ["Libre Bodoni", "serif"],
        "krub-font": ["Krub", "sans-serif"],
      },
      colors: {
        primary_black: "#1C2320",
        secondary_black: "#1D0E00",
        tertiary_black: "#172920",
        price_black: "#0B0D0C",
        // ... other colors
      },
      backgroundColor: {
        'defaultbg-color': '#F9F2E1',
      },


    },
  },
  plugins: [],
}

// fontSize: {
//   '10': '0.625rem', // 10px (0.625 * 16px base)
//   '12': '0.75rem',   // 12px (0.75 * 16px base)
//   '14': '0.875rem',  // 14px (0.875 * 16px base)
//   '18': '1.125rem', // 18px (1.125 * 16px base)
//   '20': '1.25rem',  // 20px (1.25 * 16px base)
//   '22': '1.375rem', // 22px (1.375 * 16px base)
//   '24': '1.5rem',   // 24px (1.5 * 16px base)
//   '26': '1.625rem', // 26px (1.625 * 16px base)
//   '32': '2.000rem', // 32px (2.000 * 16px base)
//   '48': '3.000rem', // 48px (3.000 * 16px base)
//   '64': '4.000rem', // 64px (4.000 * 16px base)
//   // You can add even more sizes here
// },