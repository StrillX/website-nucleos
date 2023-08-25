
const colour_scheme = require('./data/color.js')
const gradientfrom = colour_scheme.gradientfrom
const gradientto = colour_scheme.gradientto

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: { 
    extend: {
      colors: colour_scheme,
      backgroundImage: {
        'hero-pattern': `linear-gradient(to bottom, ${gradientfrom} , ${gradientto}), url('/splash-screen.webp')`,
      }

    }
  },
  plugins: [],
}
