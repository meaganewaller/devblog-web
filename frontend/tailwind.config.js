const colors = require('tailwindcss/colors');
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  important: true,
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      white: colors.white,
      black: colors.black,
      'maroon': {
        '50': '#fcf9fa',
        '100': '#f5ebee',
        '200': '#eedae1',
        '300': '#e1c0cb',
        '400': '#cf9aac',
        '500': '#bb788e',
        '600': '#a45e75',
        '700': '#894c60',
        '800': '#734152',
        '900': '#613b48',
        '950': '#331c24',
      },
      'purple': {
        '50': '#fcf7fc',
        '100': '#f8eff8',
        '200': '#f1ddf1',
        '300': '#e5c2e3',
        '400': '#d59dd2',
        '500': '#bf76ba',
        '600': '#a2579b',
        '700': '#85467e',
        '800': '#6e3a68',
        '900': '#5b3455',
        '950': '#391935',
      },
      'orange': {
        '50': '#fbf5f1',
        '100': '#f3ddce',
        '200': '#edcebb',
        '300': '#e2ab8f',
        '400': '#d58362',
        '500': '#cc6443',
        '600': '#be5038',
        '700': '#9e3e30',
        '800': '#7f332d',
        '900': '#672c27',
        '950': '#371513',
      },
      'golden': {
        '50': '#fdfbed',
        '100': '#faf2cb',
        '200': '#f4e593',
        '300': '#f0d66c',
        '400': '#eabf35',
        '500': '#e3a01d',
        '600': '#c87d17',
        '700': '#a75a16',
        '800': '#884718',
        '900': '#703a17',
        '950': '#401e08',
      },
      'thistle': {
        '50': '#f9f6f9',
        '100': '#f5eef5',
        '200': '#ecdeec',
        '300': '#d9bcd8',
        '400': '#c89ec6',
        '500': '#b480b0',
        '600': '#9e6496',
        '700': '#85517d',
        '800': '#6f4568',
        '900': '#5e3d58',
        '950': '#372033',
      },
      'viking': {
        '50': '#effafc',
        '100': '#d7f0f6',
        '200': '#b4e1ed',
        '300': '#6cc4dc',
        '400': '#44adcc',
        '500': '#2890b2',
        '600': '#247596',
        '700': '#24607a',
        '800': '#255065',
        '900': '#234356',
        '950': '#122b3a',
      },
      'steel-blue': {
        '50': '#f1f9fa',
        '100': '#daedf3',
        '200': '#badbe7',
        '300': '#8ac1d6',
        '400': '#4d9bba',
        '500': '#3883a2',
        '600': '#316b89',
        '700': '#2e5870',
        '800': '#2c4a5e',
        '900': '#294050',
        '950': '#172835',
      },
      'pink': {
        '50': '#fbf3f9',
        '100': '#f4d2ea',
        '200': '#e7a6d2',
        '300': '#d770b3',
        '400': '#c13e8d',
        '500': '#9f2d71',
        '600': '#812259',
        '700': '#671d46',
        '800': '#561a3a',
        '900': '#481930',
        '950': '#040103',
      },
    },
    screens: {
      print: { raw: "print" },
      xsm: "500px",
      xs: "320px",
      "xs-max": { max: "320px" },
      sm: "576px",
      "sm-max": { max: "576px" },
      md: "768px",
      "md-max": { max: "768px" },
      lg: "992px",
      "lg-max": { max: "992px" },
      xl: "1200px",
      "xl-max": { max: "1200px" },
      "2xl": "1400px",
      "2xl-max": { max: "1320px" },
    },

    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
        serif: ["Prata", ...defaultTheme.fontFamily.serif],
        extra: ["basiic"],
      },
      backgroundSize: {
        'bigButton': '200px'
      },
      fontSize: {
        sm2: "0.69rem", // 15px label
        sm: "0.7rem",
        base: "0.75rem", // 16px base
        md: "1.0625rem", // 17px body
        lg: "1.125rem", // 18px heading
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.85rem",
        "4xl": "2.25rem",
        "5xl": "2.65rem",
      },
      typography: (theme) => ({
      DEFAULT: {
          css: {
            color: theme('colors.secondary.darkest'),
            a: {
              color: theme('colors.secondary'),
              '&:hover': {
                color: theme('colors.primary')
              },
              textDecorationColor: theme('colors.primary.light'),
              textUnderlineOffset: '3px',
              textDecorationStyle: 'decoration-solid',
              code: { color: theme('colors.tertiary.light') }
            },
            blockquote: {
              borderLeftColor: theme('colors.primary'),
              backgroundColor: theme('colors.primary.lightest'),
              color: theme('colors.primary.darkest'),
            },
            'h1,h2,h3,h4': {
              color: theme('colors.tertiary')
            },
            hr: { borderColor: theme('colors.secondary.dark') },
            strong: { color: theme('colors.secondary.lightest') },
            thead: {
              color: theme('colors.accentFirst.light'),
              borderBottomColor: theme('colors.accentFirst.dark')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.accentFirst.darker')
              }
            },
            code: { color: theme('colors.accentThird.light') },
            pre: {
              backgroundColor: theme('colors.secondary.darkest')
            }
          }
        }
      }),
      backgroundImage: {
        clouds: "url('/static/images/bg/2f38b876.gif')",
        nightsky: "url('/static/images/bg/nightsky.gif')",
        butterflies: "url('/static/images/bg/8f823bfe.png')",
        hearts: "url('/static/images/bg/ea1cde5b.jpg')",
        purpleStars: "url('/static/images/bg/purple-stars.gif')",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { top: "0", transform: "translateY(-10%)" },
          "50%": { top: "-5px" },
        },
        glow: {
          "0%": {
            transform: "scale(1.01)", opacity: "0.1",
          },
          "25%": {
            transform: "scale(1.03)", opacity: "0.3",
          },
          "50%": {
            transform: "scale(1.05)", opacity: "0.5",
          },
          "75%": {
            transform: "scale(1.07)", opacity: "0.7",
          },
          "100%": {
            transform: "scale(1.09)", opacity: "1",
          },
        },
      },
      animation: {
        bounce: "bounce 2s infinite",
        glow: "glow 1.2s linear forward"
      },
      listStyleType: {
        flower: '"✿ "',
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        5: "5",
        15: "15",
      },
      borderRadius: {
        inherit: "inherit",
      },
      lineHeight: {
        snugish: "1.25",
        normal: "1.34",
        "extra-tight": "1.1",
      },
      maxWidth: {
        letter: "72rem",
      },
      height: {
        letter: "86.9375rem",
        "letter-col": "71.625rem",
        "letter-col-full": "77.9375rem",
      },
      spacing: {
        0.5: "2px", // 2px
        1.5: "0.375rem", // 6px
        1.6: "0.4375rem", // 7px
        2.1: "0.5625rem", // 9px
        2.5: "10px", // 10px
        3.2: "0.8125rem", // 16px
        4.5: "1.125rem", // 8px
        11: "2.75rem", // 44px (once)
      },
      transitionTimingFunction: {
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      boxShadow: {
        "inner-xs": "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)",
        "inner-2xs":
          "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)",
        "inner-sm":
          "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.3px 0.4px rgba(0, 0, 0, 0.025), 0 0.9px 1.5px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1)",
        "inner-md":
          "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.9px 1.5px rgba(0, 0, 0, 0.03), 0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12)",
        "inner-lg":
          "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 1.2px 1.9px -1px rgba(0, 0, 0, 0.014), 0 3.3px 5.3px -1px rgba(0, 0, 0, 0.038), 0 8.5px 12.7px -1px rgba(0, 0, 0, 0.085), 0 30px 42px -1px rgba(0, 0, 0, 0.15)",
        "inner-top-xs": "inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)",
        "inner-top-sm":
          "inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 0.3px 0.4px rgba(0, 0, 0, 0.025), 0 0.9px 1.5px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1)",
        "inner-top-md":
          "inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 0.9px 1.5px rgba(0, 0, 0, 0.03), 0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12)",
        "inner-top-lg":
          "inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 1.2px 1.9px -1px rgba(0, 0, 0, 0.014), 0 3.3px 5.3px -1px rgba(0, 0, 0, 0.038), 0 8.5px 12.7px -1px rgba(0, 0, 0, 0.085), 0 30px 42px -1px rgba(0, 0, 0, 0.15)",
        "glowing":
          "0 0 5px var(--main), 0 0 20px var(--main), 0 0 40px var(--main), 0 0 80px var(--main)",
      },
      opacity: {
        7: ".07",
        8: ".08",
        9: ".09",
        12: ".12",
        15: ".15",
        35: ".35",
        65: ".65",
        85: ".85",
        98: ".98",
      },
      borderWidth: {
        3: "3px",
      },
      outlineWidth: {
        3: "3px",
      },
      gridTemplateRows: {
        window: "21px auto 4px",
      },
      gridTemplateColumns: {
        window: "4px auto 4px",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
  ],
};
