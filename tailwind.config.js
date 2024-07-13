/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
      colors: {
        background: 'var(--background-color)',
        pinkbackground: 'var(--pinkbackground-color)',
        planbackground: 'var(--planbackground-color)',
        plancard: 'var(--plancard-color)',
        achbackground: 'var(--achbackground-color)',
        achcard: 'var(--achcard-color)',
        featurebackground: 'var(--featurebackground-color)',
        inputcolor: 'var(--inputcolor-color)',
        imagebgcolor: 'var(--imagebgcolor-color)',
        subsbgcolor: 'var(--subsbgcolor-color)',
        substextcolor: 'var(--substextcolor-color)',
        secondsubsbgcolor: 'var(--secondsubsbgcolor-color)',
        secondsubstextcolor: 'var(--secondsubstextcolor-color)',
        lightpink: 'var(--lightpink-color)',
        text: 'var(--text-color)',
        faqbg: 'var(--faqbg-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        hover: 'var(--hover-color)',
      },
    },
  },
  plugins: [],
}

//"orangeBg": "url('C:/Users/mzuba/OneDrive/Desktop/ClockIn UI/src/assets/orangebg2.png')",