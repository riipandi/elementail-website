/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColor = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['dark'] //specific classes
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter UI', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
      },
      screens: {
        standalone: { raw: '(display-mode: standalone)' }
      },
      colors: {
        gray: defaultColor.warmGray,
        brand: {
          50: '#ffa353',
          100: '#ff9949',
          200: '#ff8f3f',
          300: '#ff8535',
          400: '#ff7b2b',
          500: '#fc7121',
          600: '#f26717',
          700: '#e85d0d',
          800: '#de5303',
          900: '#d44900'
        },
        primary: {
          50: '#67c4ff',
          100: '#5dbaff',
          200: '#53b0ff',
          300: '#49a6ff',
          400: '#3f9cff',
          500: '#3592fc',
          600: '#2b88f2',
          700: '#217ee8',
          800: '#1774de',
          900: '#0d6ad4'
        },
        secondary: {
          50: '#c0ff9d',
          100: '#b6ff93',
          200: '#acff89',
          300: '#a2f97f',
          400: '#98ef75',
          500: '#8ee56b',
          600: '#84db61',
          700: '#7ad157',
          800: '#70c74d',
          900: '#66bd43'
        },
        accent: {
          50: '#ff94b8',
          100: '#ff8aae',
          200: '#ff80a4',
          300: '#ff769a',
          400: '#ff6c90',
          500: '#fc6286',
          600: '#f2587c',
          700: '#e84e72',
          800: '#de4468',
          900: '#d43a5e'
        }
      },
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.brand.500'),
              '&:hover': {
                color: theme('colors.brand.600')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    // Additional first-party plugins
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ]
}
