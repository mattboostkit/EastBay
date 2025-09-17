import type { Config } from 'tailwindcss';
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        // Archaeological theme colors
        bronze: {
          50: '#fdf8f3',
          100: '#f9ede1',
          200: '#f2d9c1',
          300: '#e9bf98',
          400: '#de9d6d',
          500: '#d4804d',
          600: '#c66842',
          700: '#a55138',
          800: '#864333',
          900: '#6e392c',
        },
        copper: {
          50: '#fdf5f3',
          100: '#fbe8e2',
          200: '#f8d5c8',
          300: '#f3b7a2',
          400: '#ea8f6d',
          500: '#e17148',
          600: '#cd5835',
          700: '#ab462b',
          800: '#8c3b28',
          900: '#743426',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f0',
          200: '#e8e7df',
          300: '#d7d5c7',
          400: '#b8b5a4',
          500: '#9a9684',
          600: '#7d7968',
          700: '#676455',
          800: '#565447',
          900: '#4a483e',
        },
        sand: {
          50: '#fdfcfa',
          100: '#f9f6f0',
          200: '#f2ebde',
          300: '#e8dcc3',
          400: '#d9c3a1',
          500: '#c7a882',
          600: '#b08968',
          700: '#936d55',
          800: '#7a5b49',
          900: '#674d40',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'slide-in': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'pulse-soft': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.5s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;