/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        e_purple100: "#dacffc",
        e_purple500: "#7650dc",
        e_yellow100: "#f9eee1",
        e_yellow500: "#ffcb6b",
        e_white: "#ffffff",
        e_black: "#121212",
      },

      fontFamily: {
        e_fontFamily: ["DMSans", "sans-serif"],
        e_fontFamilyItalic: ["DMSansItalic", "sans-serif"],
      },

      fontSize: {
        e_textParagraph: "18px",
      },

      fontWeight: {
        e_weightRegular: 400,
        e_weightMedium: 500,
      },
    },
  },
  plugins: [],
};
