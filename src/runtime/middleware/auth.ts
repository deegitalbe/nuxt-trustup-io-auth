import { useAuth } from "@deegital/vue-trustup-io-auth";
import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("middleware");
  const auth = useAuth();
  if (!auth.check()) {
    navigateTo(auth.authRedirection());
  }
  navigateTo(to.fullPath);
});
