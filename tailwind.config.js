module.exports = {
  content: [
    './index.html','./src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image' : "url('./src/assets/city2.jpg')"
      }
    },
  },
  plugins: [],
}
