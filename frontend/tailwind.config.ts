/** @type { import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import type { PluginAPI } from 'tailwindcss/types/config'
import hocus from 'tailwindcss-hocus'
import plugin from 'tailwindcss/plugin';


import { colors } from './config/tailwind/colors'
import { fontSizes as fontSize } from './config/tailwind/font-sizes'
import { spaces as spacing } from './config/tailwind/spacing'

const sansFontFamily = ['var(--font-sans)', 'DM Sans', ...fontFamily.sans]
const monoFontFamily = ['var(--font-mono)', 'IBM Plex Mono', ...fontFamily.mono]
const serifFontFamily = ['var(--font-serif)', 'Prata', ...fontFamily.serif]

const breakpoints = {
  default: '0px',
  'mobile-sm': '320px',
  'mobile-md': '375px',
  'mobile-lg': '425px',
  'tablet-sm': '596px',
  'tablet-md': '768px',
  'tablet-lg': '792px',
  desktop: '960px',
}

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    spacing: {...spacing, '0': '0rem' },
    borderRadius: { ...spacing, none: '0rem', half: '50%', full: '9999px' },
    colors,
    fontSize,
    screens: breakpoints,
    extend: {
      backgroundImage: {
        clouds: "url('/static/images/bg/2f38b876.gif')",
        nightsky: "url('/static/images/bg/nightsky.gif')",
        butterflies: "url('/static/images/bg/8f823bfe.png')",
        hearts: "url('/static/images/bg/ea1cde5b.jpg')",
        purpleStars: "url('/static/images/bg/purple-stars.gif')",
        windowTitleBarButton: "linear-gradient(to bottom right, #9c9c9c, #fff)",
        windowTitleBarButtonActive: "linear-gradient(to bottom right, #444, #aaa)",
        windowTitleBar: "repeating-linear-gradient(#fff, #000 2px)",
      },
      typography: ({theme}: PluginAPI) => ({
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
        serif: serifFontFamily,
        extra: ['basiic', ...fontFamily.sans],
        retro: ['VT323', ...fontFamily.mono],
        venice: ['Venice Classic', ...fontFamily.mono],
      },
      fontWeight: {
        normal: '450',
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
        bounce: {
          "0%, 100%": { top: "0", transform: "translateY(-10%)" },
          "50%": { top: "-5px" },
        },
        glow: {
          "0%": {
            transform: "scale(1.01)",
            opacity: "0.1",
          },
          "25%": {
            transform: "scale(1.03)",
            opacity: "0.3",
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: "0.5",
          },
          "75%": {
            transform: "scale(1.07)",
            opacity: "0.7",
          },
          "100%": {
            transform: "scale(1.09)",
            opacity: "1",
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
      animation: {
        'page-transition': 'page-transition 300ms ease-in-out backwards',
        scroll: 'scroll 15s linear infinite',
        wave: 'wave 2.5s infinite',
        bounce: "bounce 2s infinite",
        glow: "glow 1.2s linear forward",
      },
      listStyleType: {
        flower: '"✿ "',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  corePlugins: {
    float: false,
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
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
    typography,
    hocus,
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens')
  ],
  safelist: [
    {
      pattern: /(from|to)-gradient-(brand|blue|green|yellow|orange|red|purple)/,
      variants: [
        'dark',
        'hocus',
        'group-hocus/link',
        '[[aria-current="page"]_&]',
      ],
    },
    {
      pattern:
        /decoration-gradient-(brand|blue|green|yellow|orange|red|purple)/,
      variants: ['hocus'],
    },
  ],
} satisfies Config;
