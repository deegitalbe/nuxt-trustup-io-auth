import { defineNuxtRouteMiddleware, navigateTo, useNuxtApp } from "nuxt/app";
import { useAuth } from "@deegital/vue-trustup-io-auth";

const auth = useAuth();

export default defineNuxtRouteMiddleware((to, from) => {
  const app = useNuxtApp();
  console.log(app.vueApp.config.globalProperties.$auth);

  if (!app.vueApp.config.globalProperties.$auth.check()) {
    return navigateTo(
      app.vueApp.config.globalProperties.$auth.authRedirection(),
      { external: true }
    );
  }
});
