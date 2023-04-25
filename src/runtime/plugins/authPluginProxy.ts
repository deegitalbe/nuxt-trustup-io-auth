import { authPlugin } from "@deegital/vue-trustup-io-auth";
import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  const options = useRuntimeConfig().public.trustupIoAuth;
  nuxtApp.vueApp.use(authPlugin, options);
});
