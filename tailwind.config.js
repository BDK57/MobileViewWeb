module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}", "'./node_modules/tw-elements/dist/js/**/*.js'"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "white",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        navText: "black",
        navBorder: "#505050",
        sectionHeading: "#252525",
        buttonColor: "#006ca8",
        heading: "#255F87",
        footer: "#6d6e72"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Sans: "Open Sans"
      },


    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
};