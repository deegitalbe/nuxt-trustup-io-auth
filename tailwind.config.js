const loaderTailwindPath =
  require("@deegital/vue-3-trustup-io-loader").loaderTailwindPath;
// import { loaderTailwindPath } from "@deegital/vue-3-trustup-io-loader";
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
    loaderTailwindPath,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
