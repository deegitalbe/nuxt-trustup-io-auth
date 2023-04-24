/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./playground/components/**/*.{js,vue,ts}",
    "./playground/layouts/**/*.vue",
    "./playground/pages/**/*.vue",
    "./playground/plugins/**/*.{js,ts}",
    "./playground/nuxt.config.{js,ts}",
    "./playground/app.vue",
    "./src/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
