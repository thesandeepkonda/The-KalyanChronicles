/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0A0F24',         /* Deep Midnight Blue (Absolutely no black) */
          secondary: '#131B33',  /* Rich Navy for sections */
          card: '#1D2847',       /* Elevated Blue Card background */
          gold: '#EAB308',       /* Vibrant Gold to pop against the blue */
          text: '#F8FAFC',       /* Crisp Icy White */
          muted: '#94A3B8'       /* Soft Blue-Gray for secondary text */
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}