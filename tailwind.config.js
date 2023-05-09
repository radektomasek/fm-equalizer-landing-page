/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1440px',
      },
      colors: {
        cyan: 'hsl(177, 68%, 64%)',
        lightRed: 'hsl(12, 94%, 65%)',
        orange: 'hsl(33, 100%, 70%)',
        lightGray: 'hsl(20, 33%, 98%)',
        darkBlue: 'hsl(244, 23%, 12%)'
      },
      fontFamily: {
        plex: ['IBM Plex Sans', 'sans-serif'],
      },
      backgroundImage: {
        'small': "url('../../assets/bg-main-mobile.png')",
        'medium': "url('../../assets/bg-main-tablet.png')",
        'large': "url('../../assets/bg-main-desktop.png')",
      },
    },
  },
  plugins: [],
}

