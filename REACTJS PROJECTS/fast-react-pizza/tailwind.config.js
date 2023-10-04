/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    // overide existing tailwind classes
    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
