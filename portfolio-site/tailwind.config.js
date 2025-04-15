/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['times new roman', 'serif'],
        custom: ['logo', 'sans-serif'],
        title: ['PlayfairDisplay', 'serif'],
        epilogue: ['Epilogue', 'sans-serif'],
        jollylodger: ['JollyLodger', 'cursive'],
        mina: ['Mina', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


