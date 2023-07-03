/** @type { import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import Colorkraken from "colorkraken";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class",
  important: true,
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
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
      colors: {
        transparent: "transparent",
        inherit: "inherit",
        ...Colorkraken,
      },
      textColors: Colorkraken,
      backgroundColors: Colorkraken,
      fontFamily: {
        sans: ["DM Sans", ..._fontFamily.sans],
        mono: ["IBM Plex Mono", ..._fontFamily.mono],
        serif: ["Prata", ..._fontFamily.serif],
        extra: ["basiic"],
        retro: ["VT323", ..._fontFamily.mono],
        venice: ["Venice Classic", ..._fontFamily.mono],
      },
      backgroundSize: {
        bigButton: "200px",
      },
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
      },
      animation: {
        bounce: "bounce 2s infinite",
        glow: "glow 1.2s linear forward",
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
      minHeight: { 128: "31.25rem" },
      maxWidth: {
        letter: "72rem",
      },
      height: {
        letter: "86.9375rem",
        "letter-col": "71.625rem",
        "letter-col-full": "77.9375rem",
        128: "31.25rem",
      },
      spacing: {
        0.5: "2px",
        1.5: "0.375rem",
        1.6: "0.4375rem",
        2.1: "0.5625rem",
        2.5: "10px",
        3.2: "0.8125rem",
        4.5: "1.125rem",
        11: "2.75rem", // 44px (once)
      },
      transitionTimingFunction: {
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      boxShadow: {
        "inner-xs":
        "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)",
        "inner-2xs":
        "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)",
        "inner-sm":
        "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.3px 0.4px rgba(0, 0, 0, 0.025), 0 0.9px 1.5px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1)",
        "inner-md":
        "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.9px 1.5px rgba(0, 0, 0, 0.03), 0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12)",
        "inner-lg":
        "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 1.2px 1.9px -1px rgba(0, 0, 0, 0.014), 0 3.3px 5.3px -1px rgba(0, 0, 0, 0.038), 0 8.5px 12.7px -1px rgba(0, 0, 0, 0.085), 0 30px 42px -1px rgba(0, 0, 0, 0.15)",
        "inner-top-xs":
        "inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)",
        "inner-top-sm":
        "inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 0.3px 0.4px rgba(0, 0, 0, 0.025), 0 0.9px 1.5px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1)",
        "inner-top-md":
        "inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 0.9px 1.5px rgba(0, 0, 0, 0.03), 0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12)",
        "inner-top-lg":
        "inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 1.2px 1.9px -1px rgba(0, 0, 0, 0.014), 0 3.3px 5.3px -1px rgba(0, 0, 0, 0.038), 0 8.5px 12.7px -1px rgba(0, 0, 0, 0.085), 0 30px 42px -1px rgba(0, 0, 0, 0.15)",
        glowing: "0 0 5px var(--main), 0 0 20px var(--main), 0 0 40px var(--main), 0 0 80px var(--main)",
        menu: "inset 1px 1px 0 var(--purple-50), inset -1px -1px 0 var(--purple-500)",
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
  } ,
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".btn": {
          position: "relative",
          textTransform: "uppercase",
          border: "none",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "24px",
          paddingLeft: "5px",
          paddingRight: "5px",
          boxSizing: "border-box",
          cursor: "pointer",
          fontFamily: "'Press Start 2P', cursive",
          outline: "none",
          "&::after": {
            content: '""',
            position: "absolute",
            left: "0",
            borderRadius: "24px",
            zIndex: "-1",
          },
          "&:active": {
            top: "10px",
            "&::after": {
              top: "2px",
            },
          },
        },
      });
    }),
    require("@gelbehexe/tailwindcss-breakpoint-indicator"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
