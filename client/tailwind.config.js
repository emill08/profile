/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#11b2c4",
                   
          "secondary": "#58d3c5",
                   
          "accent": "#64dbcd",
                   
          "neutral": "#191727",
                   
          "base-100": "#e6e3e8",
                   
          "info": "#73aede",
                   
          "success": "#139a50",
                   
          "warning": "#fcb24a",
                   
          "error": "#de4c45",
                   },
      },
    ],
  },
  plugins: [require("daisyui")],
};
