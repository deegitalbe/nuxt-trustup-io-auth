import * as dotenv from "dotenv";
dotenv.config();

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      authTrustupIoUrl: "",
    },
  },
  modules: ["../src/module"],
  trustupIoAuth: {
    localStorageKey: "auth_token",
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
});
