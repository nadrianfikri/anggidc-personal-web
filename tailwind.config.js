module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '4rem',
    },
    extend: {
      fontFamily: {
        display: ['Raleway', 'sans-serif'],
      },
      colors: {
        darker: '#463f3a',
        midDark: '#8a817c',
        secondary: '#bcb8b1',
        light: '#f4f3ee',
        warmPeach: '#e0afa0',
      },
    },
  },
  plugins: [],
};
