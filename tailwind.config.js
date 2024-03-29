/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          'very-dark': 'hsl(0, 0%, 17%)',
          'dark': 'hsl(0, 0%, 59%)'
        }
      },
    },
  },
  plugins: [],
};
