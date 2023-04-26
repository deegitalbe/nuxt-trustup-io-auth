import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { useAuth } from "../composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuth();
  // console.log(auth.check().then((response) => c));
  // if (!auth.check()) {
  //   return navigateTo(auth.authRedirection(), { external: true });
  // }

  auth.check().then((response) => {
    console.log(auth.token);
    if (!response) {
      return navigateTo(auth.authRedirection(), { external: true });
    }
  });
});
