module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9efff',
          500: '#42a5f5',
          600: '#1d9bf0',
          700: '#0d6fcc',
          900: '#0a2540',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(66, 165, 245, 0.35)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top left, rgba(66,165,245,0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(168,85,247,0.18), transparent 25%)',
      },
    },
  },
  plugins: [],
};
