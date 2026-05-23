/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Urbanist', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Urbanist', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        void: '#02020a',
        ink: '#070713',
        plasma: '#9b5cff',
        ion: '#00d9ff',
        flux: '#ff2bd6',
        volt: '#27f7a5',
      },
      boxShadow: {
        neon: '0 0 32px rgba(0, 217, 255, 0.24), 0 0 80px rgba(155, 92, 255, 0.16)',
        magenta: '0 0 42px rgba(255, 43, 214, 0.22)',
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
        orbit: 'orbit 28s linear infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        orbit: {
          to: { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', filter: 'blur(22px)' },
          '50%': { opacity: '0.95', filter: 'blur(30px)' },
        },
      },
    },
  },
  plugins: [],
};
