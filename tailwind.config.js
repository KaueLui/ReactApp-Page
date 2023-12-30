/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkgray: "#afafaf",
        gainsboro: {
          "100": "#e1e1e1",
          "200": "#d9d9d9",
        },
        firebrick: {
          "100": "#af4011",
          "200": "#ae3f10",
        },
        dimgray: {
          "100": "#6a6765",
          "200": "#5a5a5a",
        },
        dark: "#191a23",
        darkblue: "rgba(10, 45, 187, 0.45)",
        silver: "#c6c6c6",
        gray: "#1a1a1a",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "general-sans-variable": "'General Sans Variable'",
        inter: "Inter",
        gyanko: "Gyanko",
        inherit: "inherit",
      },
      borderRadius: {
        "3xs": "10px",
        "41xl": "60px",
        "26xl": "45px",
        "31xl": "50px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      xl: "20px",
      sm: "14px",
      "11xl": "30px",
      "5xl": "24px",
      "3xl": "22px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
