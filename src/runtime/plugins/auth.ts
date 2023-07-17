import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app";
import { authPlugin } from "@deegital/vue-trustup-io-auth";

export default defineNuxtPlugin((nuxtApp) => {
  const { trustupIoAuthUrl, trustupIoAuth } = useRuntimeConfig().public;
  nuxtApp.vueApp.use(authPlugin, {
    ...trustupIoAuth,
    authUrl: trustupIoAuthUrl,
  });
});
