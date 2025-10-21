/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'mobile': '360px',
      'tablet': '768px',
      'laptop': '1024px',
    },
    extend: {
      width: {
        'para': '444px',
        'blur_shadow': '761px',
      },
      height: {
        'blur_shadow': '761px',
      }
    },
    fontFamily: {
      'bellefair': ['Bellefair', 'serif'],
      'barlow': ['Barlow Condensed', 'sans-serif'],
    },
    fontSize: {
      'heading': ['28px', {
        lineSpacing: '4.725px',
        fontWeight: '400',
      }],
      'name': ['56px', {
        fontWeight: '400',
      }],
      'para': ['18px', {
        lineHeight: '32px',
        fontWeight: '400',
      }],
      // HOME 
      'hover_text': ['32px', {
        letterSpacing: '2px',
        fontWeight: '400',
      }],
      'space': ['150px', {
        fontWeight: '400',
      }],

      // DESTINATION 
      'main_heading': ['16px', {
        lineSpacing: '2.7px',
        fontWeight: '400',
      }],
      'main': ['100px', {
        fontWeight: '400',
      }],
      'subheading': ['14px', {
        lineSpacing: '2.362px',
        fontWeight: '400',
      }],
      'numbers': ['28px', {
        fontWeight: '400',
      }],

      //CREW
      'title': ['32px', {
        fontWeight: '400',
      }],
    }
  },
  plugins: [],
}