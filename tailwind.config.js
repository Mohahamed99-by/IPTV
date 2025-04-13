/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'beam': 'beam 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        beam: {
          '0%': {
            opacity: '0.3',
            transform: 'translateY(0) rotate(var(--rotation))',
          },
          '50%': {
            opacity: '0.6',
            transform: 'translateY(-30px) rotate(var(--rotation))',
          },
          '100%': {
            opacity: '0.3',
            transform: 'translateY(0) rotate(var(--rotation))',
          },
        },
        float: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-15px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        'gradient-xy': {
          '0%': {
            'background-position': '0% 0%',
          },
          '50%': {
            'background-position': '100% 100%',
          },
          '100%': {
            'background-position': '0% 0%',
          },
        },
        'spin-slow': {
          'from': {
            transform: 'rotate(0deg)',
          },
          'to': {
            transform: 'rotate(360deg)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

