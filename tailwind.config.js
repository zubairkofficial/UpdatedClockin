/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "orangeLine": "url('/public/assets/newOrangeLine')",
        "orangelinewithicons": "url('/public/assets/orangeLinewithIcons.png')",
        "footerBg": "url('/public/assets/bg1.png')",
        "orangebgBox": "url('/public/assets/orangebgBox.png')",
        "laptopmockup": "url('/public/assets/laptopmockup.png ')",
      },
    },
  },
  plugins: [],
}

//"orangeBg": "url('C:/Users/mzuba/OneDrive/Desktop/ClockIn UI/src/assets/orangebg2.png')",