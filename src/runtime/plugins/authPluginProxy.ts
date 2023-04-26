import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app";
import useAuthConfig from "../composables/useAuthConfig";

export default defineNuxtPlugin((nuxtApp) => {
  const options = useRuntimeConfig().public.trustupIoAuth;
  const config = useAuthConfig();

  config.create(options);
});
