/** @type { import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'
import type { PluginAPI } from 'tailwindcss/types/config'
import hocus from 'tailwindcss-hocus'

import { colors } from './config/tailwind/colors'
import { fontSizes as fontSize } from './config/tailwind/font-sizes'

const sansFontFamily = ['var(--font-sans)', 'DM Sans', ...fontFamily.sans]
const monoFontFamily = ['var(--font-mono)', 'IBM Plex Mono', ...fontFamily.mono]

const breakpoints = {
  // xs: { max: '575px' },
  // sm: { min: '576px', max: '897px' },
  // md: { min: '898px', max: '1199px' },
  // lg: { min: '1159px' },
  // xl: { min: '1200px' },
  // '2xl': { min: '1359px' },
  // mobile: { max: '640px', min: '320px' },
  // tablet: { max: '1024px', min: '641px' },
  // laptop: { max: '1280px', min: '1025px' },
  // desktop: { max: '1920px', min: '1281px' },
  // fourk: { max: '2560px', min: '1921px' },
}

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  important: true,
  theme: {
    // spacing: { ...spacing, '0': '0rem' },
    // borderRadius: { ...spacing, none: '0rem', half: '50%', full: '9999px' },
    colors,
    // fontSize,
//    screens: breakpoints,
    extend: {
      fontSize: {
        md: '1rem',
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
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        5: '5',
        15: '15',
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
      animation: {
        'page-transition': 'page-transition 300ms ease-in-out backwards',
        scroll: 'scroll 15s linear infinite',
        wave: 'wave 2.5s infinite',
        bounce: 'bounce 2s infinite',
        glow: 'glow 1.2s linear forward',
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite',
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
      typography: ({ theme }: PluginAPI) => ({
        DEFAULT: {
          css: {
            color: theme('colors.secondary-txt'),
            a: {
              color: theme('colors.accent'),
              textDecoration: 'wavy',
              '&:hover,&:focus': {
                color: theme('colors.accent-dark/1'),
              },
            },
          },
        },
        quoteless: {
          css: {
            blockquote: { 'font-style': 'normal' },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      }),
      fontFamily: {
        sans: sansFontFamily,
        mono: monoFontFamily,
        serif: monoFontFamily,
        extra: ['basiic', ...fontFamily.sans],
        retro: ['VT323', ...fontFamily.mono],
        venice: ['Venice Classic', ...fontFamily.mono],
      },
      fontWeight: {
        normal: '400',
      },
      lineHeight: {
        relaxed: '1.75',
      },
      saturate: {
        125: '1.25',
      },
      dropShadow: {
        doodle: [
          '-4px -4px 2px var(--color-illustrations-shadow)',
          '4px 4px 2px var(--color-illustrations-shadow)',
          '4px -4px 2px var(--color-illustrations-shadow)',
          '-4px 4px 2px var(--color-illustrations-shadow)',
        ],
      },
      transformOrigin: {
        waving: '70% 70%',
      },
      transitionTimingFunction: { eio: 'ease-in-out', DEFAULT: 'ease-in-out' },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
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
        'page-transition': {
          '0%': { transform: 'scale(0.975)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(1.5rem)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        wave: {
          'from, 50%, to': { transform: 'rotate(0deg)' },
          '10%, 30%': { transform: 'rotate(-10deg)' },
          '20%': { transform: 'rotate(12deg)' },
          '40%': { transform: 'rotate(9deg)' },
        },
      },
      listStyleType: {
        flower: '"✿ "',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      )
    }),
    typography,
    hocus,
    require('tailwindcss-animate'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
} satisfies Config