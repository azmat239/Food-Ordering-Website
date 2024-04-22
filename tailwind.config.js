/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/bgLogin.jpg')",
        signup: "url('../public/signup.jpg')",
      },
    },
  },
  plugins: [],
};
