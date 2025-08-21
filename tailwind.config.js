/** @type {import('tailwindcss').Config} */
export default {

content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#27548A",
        ext: "#F3F3E0",
        beig: "#F5EEDC",
        darkblue: "#27548A ",
        lightblue:"rgb(130, 157, 193)" ,
        darkgray:"#131921",
        gray:"#D9D9D9",
        yellow:"#FFCC00",
        verydarkblue:"#232F3E",
        darkyellow:"#c49d05ff",
        bluegray:"#37475A"
      },
    },
    container: {
      center: true,
    },
  },


  // content: [
  //   "./index.html",
  //   "./src/**/*.{js,ts,jsx,tsx}",
  // ],
  // prefix: 'tw-',
  // theme: {
  //   extend: {},
  //   container: {
  //     center: true,      
  //     padding: '1rem',    
  //     screens: {
  //       sm: '640px',
  //       md: '768px',
  //       lg: '1024px',
  //       xl: '1280px',
  //       '2xl': '1536px',
  //     },
  //   },
  // },
  plugins: [],
}

