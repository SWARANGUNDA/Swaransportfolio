/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // MANDATORY DESIGN SYSTEM - Base Dark Surfaces
        midnight: '#080B10',
        deepSlate: '#101820',
        elevatedSurface: '#16242B',
        dark: {
          950: '#080B10', // Midnight background
          900: '#101820', // Deep slate
          850: '#131e27', // Mid surface
          800: '#16242B', // Elevated surface
          750: '#1c2d36', // Hover surface
          700: '#233742',
          600: '#314c5b',
        },
        // MANDATORY DESIGN SYSTEM - Accent Colors
        emerald: {
          brand: '#35E6B0',
          DEFAULT: '#35E6B0',
          300: '#64efc5',
          400: '#35E6B0',
          500: '#20c797',
          600: '#13a47a',
        },
        cyan: {
          brand: '#36D9F5',
          DEFAULT: '#36D9F5',
          300: '#6ce3f8',
          400: '#36D9F5',
          500: '#18bee0',
          600: '#0ea0be',
        },
        lime: {
          brand: '#D8FF58',
          DEFAULT: '#D8FF58',
          hover: '#c6ef40',
          glow: 'rgba(216, 255, 88, 0.16)',
          muted: 'rgba(216, 255, 88, 0.06)',
        },
        violet: {
          soft: '#A78BFA',
          DEFAULT: '#A78BFA',
          400: '#A78BFA',
          500: '#8b5cf6',
        },
        // MANDATORY DESIGN SYSTEM - Typography
        txt: {
          primary: '#F4F7F8',
          secondary: '#8A99A6',
          muted: '#617180',
        },
        // Reconciled legacy references
        cyber: {
          cyan: '#36D9F5',
          emerald: '#35E6B0',
          lime: '#D8FF58',
          violet: '#A78BFA',
          slate: '#101820',
          midnight: '#080B10',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        editorial: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        }
      }
    },
  },
  plugins: [],
}
