import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app";
import { authPlugin } from "@deegital/vue-trustup-io-auth";

export default defineNuxtPlugin((nuxtApp) => {
  const moduleOptions = useRuntimeConfig().public.trustupIoAuth;
  const authTrustupIoUrl = useRuntimeConfig().public.authTrustupIoUrl;

  nuxtApp.vueApp.use(authPlugin, {
    ...moduleOptions,
    authBackendUrl: authTrustupIoUrl,
  });
});
