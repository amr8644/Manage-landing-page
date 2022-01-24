module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      colors: {
        BrightRed: "hsl(12, 88%, 59%)",
        DarkBlue: "hsl(228, 39%, 23%)",
        DarkGrayishBlue: "hsl(227, 12%, 61%)",
        VeryDarkBlue: "hsl(233, 12%, 13%)",
        VeryPaleRed: "hsl(13, 100%, 96%)",
        VaryLightGray: "hsl(0, 0%, 98%)",
      },
      screens: {
        sm: "320px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
      animation: {
        myAnim: "1s ease 0s 1 normal forwards",
      },
      keyframes: {
        myAnim: {
          "0%": {
            opacity: 0,
            transform: "translateX(-250px)",
          },

          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
    },

    fontFamily: {
      BeVietnamPro: ["Be Vietnam Pro, sans-serif"],
    },
  },
  variants: {
    extend: {
      animation: ["responsive", "motion-safe", "motion-reduce", "hover"],
    },
  },
  plugins: [],
};
