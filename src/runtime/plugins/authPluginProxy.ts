import { authPlugin } from "@deegital/vue-trustup-io-auth";
import { addRouteMiddleware } from "@nuxt/kit";
import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  const options = useRuntimeConfig().public.trustupIoAuth;
  nuxtApp.vueApp.use(authPlugin, options);
  //   addRouteMiddleware("auth");
});
