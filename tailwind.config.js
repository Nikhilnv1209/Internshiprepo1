/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'borderbg': "linear-gradient(to right, rgba(4, 120, 255,.3) 0%, rgba(70, 75, 96,.3) 100%);",
      })
    },
  },
  plugins: [],
}

