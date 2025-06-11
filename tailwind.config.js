/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#7F5539',
          800: '#8B6547',
          700: '#976B4A',
          600: '#9C6644',
          500: '#A77C52',
          400: '#B58E63',
          300: '#C4A37A',
        },
        secondary: {
          900: '#9C8066',
          800: '#AD9275',
          700: '#BEA589',
          600: '#CFBB9E',
          500: '#DDB892',
          400: '#E3C4A0',
          300: '#EAD1B1',
        },
        cream: {
          900: '#C8BFB2',
          800: '#D2CBC0',
          700: '#DCD7CE',
          600: '#E6E3DD',
          500: '#EDE0D4',
          400: '#F1E7DE',
          300: '#F6EFE8',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        accent: ['Libre Baskerville', 'serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      backgroundImage: {
        'whiskey-texture': "url('https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg')"
      }
    },
  },
  plugins: [],
};