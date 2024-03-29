import * as dotenv from "dotenv";
dotenv.config();

export default defineNuxtConfig({
  trustupIoAuth: {
    accessRoles: ["Developer"],
  },
  modules: ["@nuxt/devtools", "../src/module.ts"],
  runtimeConfig: {
    public: {
      trustupIoAuthUrl: "https://trustup-io-auth.docker.localhost",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
  css: ["~/assets/css/main.css"],
  typescript: {
    strict: true,
  },
  devServer: {
    port: parseInt(process.env.APP_PORT || "3000"),
  },
  vite: {
    server: {
      hmr: {
        port: parseInt(process.env.WEBSOCKET_PORT || "24678"),
      },
    },
  },
  devtools: { enabled: true },
});
