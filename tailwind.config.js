/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        retro: ['RetroGaming', 'sans-serif'], // lisää custom-fontti
        vhs: ['VHSGothic', 'sans-serif'],     // VHS Gothic fontti
        pixel: ['PixelOperator', 'sans-serif'],
        player2: ['PressStart2P', 'sans-serif']
      },
      animation: {
        fadeIn: 'fadeIn 0.5s forwards', // lisää fadeIn animaatio
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'white-outline': '0 1px 2px 4px rgba(255,255,255,0.5)',
      },
    },
  },
  plugins: [],
}

