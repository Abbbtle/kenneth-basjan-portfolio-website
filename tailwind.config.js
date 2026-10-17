import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // The original site's charcoal, cards and purple.
        charcoal: '#1E1E1E',
        raised: '#181818',
        sunken: '#0D0D0D',
        accent: {
          DEFAULT: '#906EF0',
          // Filled backgrounds behind white text (5.2:1).
          fill: '#7350E6',
          // Purple text on the white About panel (9:1).
          strong: '#4E30A5',
        },
        muted: '#B3B3B3',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        page: '90rem',
      },
    },
  },
  plugins: [],
};
