/** @type { import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
// import Colorkraken from 'colorkraken';

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class',
  important: true,
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      print: { raw: 'print' },
      xsm: '500px',
      xs: '320px',
      'xs-max': { max: '320px' },
      sm: '576px',
      'sm-max': { max: '576px' },
      md: '768px',
      'md-max': { max: '768px' },
      lg: '992px',
      'lg-max': { max: '992px' },
      xl: '1200px',
      'xl-max': { max: '1200px' },
      '2xl': '1400px',
      '2xl-max': { max: '1320px' },
    },
    extend: {
      colors: {
        transparent: 'transparent',
        inherit: 'inherit',
        current: 'currentColor',
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-two": "rgb(var(--color-primary-two) / <alpha-value>)",
        "primary-three": "rgb(var(--color-primary-three) / <alpha-value>)",
        "primary-four": "rgb(var(--color-primary-four) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "secondary-two": "rgb(var(--color-secondary-two) / <alpha-value>)",
        "secondary-three": "rgb(var(--color-secondary-three) / <alpha-value>)",
        "secondary-four": "rgb(var(--color-secondary-four) / <alpha-value>)",
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        "tertiary-two": "rgb(var(--color-tertiary-two) / <alpha-value>)",
        "tertiary-three": "rgb(var(--color-tertiary-three) / <alpha-value>)",
        "tertiary-four": "rgb(var(--color-tertiary-four) / <alpha-value>)",
        'accent-first': "rgb(var(--color-accent-first) / <alpha-value>)",
        'accent-first-two': "rgb(var(--color-accent-first-two) / <alpha-value>)",
        'accent-first-three': "rgb(var(--color-accent-first-three) / <alpha-value>)",
        'accent-first-four': "rgb(var(--color-accent-first-four) / <alpha-value>)",
        'accent-second': "rgb(var(--color-accent-second) / <alpha-value>)",
        'accent-second-two': "rgb(var(--color-accent-second-two) / <alpha-value>)",
        'accent-second-three': "rgb(var(--color-accent-second-three) / <alpha-value>)",
        'accent-second-four': "rgb(var(--color-accent-second-four) / <alpha-value>)",
        'accent-third': "rgb(var(--color-accent-third) / <alpha-value>)",
        'accent-third-two': "rgb(var(--color-accent-third-two) / <alpha-value>)",
        'accent-third-three': "rgb(var(--color-accent-third-three) / <alpha-value>)",
        'accent-third-four': "rgb(var(--color-accent-third-four) / <alpha-value>)",
        neutral: "rgb(var(--color-neutral) / <alpha-value>)",
        'neutral-two': "rgb(var(--color-neutral-two) / <alpha-value>)",
        'neutral-three': "rgb(var(--color-neutral-three) / <alpha-value>)",
        'neutral-four': "rgb(var(--color-neutral-four) / <alpha-value>)",
        'neutral-dark': "rgb(var(--color-neutral-dark) / <alpha-value>)",
        'neutral-dark-two': "rgb(var(--color-neutral-dark-two) / <alpha-value>)",
        'neutral-dark-three': "rgb(var(--color-neutral-dark-three) / <alpha-value>)",
        'neutral-dark-four': "rgb(var(--color-neutral-dark-four) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['DM Sans', ..._fontFamily.sans],
        mono: ['IBM Plex Mono', ..._fontFamily.mono],
        serif: ['Prata', ..._fontFamily.serif],
        extra: ['basiic'],
        retro: ['VT323', ..._fontFamily.mono],
        venice: ['Venice Classic', ..._fontFamily.mono],
      },
      backgroundSize: {
        bigButton: '200px',
      },
      backgroundImage: {
        clouds: "url('/static/images/bg/2f38b876.gif')",
        nightsky: "url('/static/images/bg/nightsky.gif')",
        butterflies: "url('/static/images/bg/8f823bfe.png')",
        hearts: "url('/static/images/bg/ea1cde5b.jpg')",
        purpleStars: "url('/static/images/bg/purple-stars.gif')",
        windowTitleBarButton: 'linear-gradient(to bottom right, #9c9c9c, #fff)',
        windowTitleBarButtonActive:
          'linear-gradient(to bottom right, #444, #aaa)',
        windowTitleBar: 'repeating-linear-gradient(#fff, #000 2px)',
      },
      keyframes: {
        float: {
          '0%': { boxShadow: '0 5px 15px 0px rgba(0, 0, 0, 0.6)', transform: 'translatey(0px)' },
          '50%': { boxShadow: '0 25px 15px 0px rgba(0, 0, 0, 0.2)', transform: 'translatey(-8px)' },
          '100%': { boxShadow: '0 5px 15px 0px rgba(0, 0, 0, 0.6)', transform: 'translatey(0px)' }
        },
        bounce: {
          '0%, 100%': { top: '0', transform: 'translateY(-10%)' },
          '50%': { top: '-5px' },
        },
        glow: {
          '0%': {
            transform: 'scale(1.01)',
            opacity: '0.1',
          },
          '25%': {
            transform: 'scale(1.03)',
            opacity: '0.3',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.5',
          },
          '75%': {
            transform: 'scale(1.07)',
            opacity: '0.7',
          },
          '100%': {
            transform: 'scale(1.09)',
            opacity: '1',
          },
        },
      },
      animation: {
        bounce: 'bounce 2s infinite',
        glow: 'glow 1.2s linear forward',
        float: 'float 2s ease-in-out infinite',
      },
      listStyleType: {
        flower: '"✿ "',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        5: '5',
        15: '15',
      },
      borderRadius: {
        inherit: 'inherit',
      },
      lineHeight: {
        snugish: '1.25',
        normal: '1.34',
        'extra-tight': '1.1',
      },
      minHeight: { 128: '31.25rem' },
      maxWidth: {
        letter: '72rem',
      },
      height: {
        letter: '86.9375rem',
        'letter-col': '71.625rem',
        'letter-col-full': '77.9375rem',
        128: '31.25rem',
      },
      spacing: {
        0.5: '2px',
        1.5: '0.375rem',
        1.6: '0.4375rem',
        2.1: '0.5625rem',
        2.5: '10px',
        3.2: '0.8125rem',
        4.5: '1.125rem',
        11: '2.75rem', // 44px (once)
      },
      transitionTimingFunction: {
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      boxShadow: {
        'inner-xs':
          'inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)',
        'inner-2xs':
          'inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)',
        'inner-sm':
          'inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.3px 0.4px rgba(0, 0, 0, 0.025), 0 0.9px 1.5px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1)',
        'inner-md':
          'inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.9px 1.5px rgba(0, 0, 0, 0.03), 0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12)',
        'inner-lg':
          'inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 1.2px 1.9px -1px rgba(0, 0, 0, 0.014), 0 3.3px 5.3px -1px rgba(0, 0, 0, 0.038), 0 8.5px 12.7px -1px rgba(0, 0, 0, 0.085), 0 30px 42px -1px rgba(0, 0, 0, 0.15)',
        'inner-top-xs':
          'inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)',
        'inner-top-sm':
          'inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 0.3px 0.4px rgba(0, 0, 0, 0.025), 0 0.9px 1.5px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1)',
        'inner-top-md':
          'inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 0.9px 1.5px rgba(0, 0, 0, 0.03), 0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12)',
        'inner-top-lg':
          'inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 1.2px 1.9px -1px rgba(0, 0, 0, 0.014), 0 3.3px 5.3px -1px rgba(0, 0, 0, 0.038), 0 8.5px 12.7px -1px rgba(0, 0, 0, 0.085), 0 30px 42px -1px rgba(0, 0, 0, 0.15)',
        glowing:
          '0 0 5px var(--main), 0 0 20px var(--main), 0 0 40px var(--main), 0 0 80px var(--main)',
        menu: 'inset 1px 1px 0 var(--purple-50), inset -1px -1px 0 var(--purple-500)',
      },
      opacity: {
        7: '.07',
        8: '.08',
        9: '.09',
        12: '.12',
        15: '.15',
        35: '.35',
        65: '.65',
        85: '.85',
        98: '.98',
      },
      borderWidth: {
        3: '3px',
      },
      outlineWidth: {
        3: '3px',
      },
      gridTemplateRows: {
        window: '21px auto 4px',
      },
      gridTemplateColumns: {
        window: '4px auto 4px',
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.btn': {
          position: 'relative',
          textTransform: 'uppercase',
          border: 'none',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: '24px',
          paddingLeft: '5px',
          paddingRight: '5px',
          boxSizing: 'border-box',
          cursor: 'pointer',
          fontFamily: "'Press Start 2P', cursive",
          outline: 'none',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '0',
            borderRadius: '24px',
            zIndex: '-1',
          },
          '&:active': {
            top: '10px',
            '&::after': {
              top: '2px',
            },
          },
        },
      });
    }),
    require('@gelbehexe/tailwindcss-breakpoint-indicator'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
