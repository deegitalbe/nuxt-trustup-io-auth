import { useAuth } from "@deegital/vue-trustup-io-auth";
import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const path = window.location.origin + to.fullPath;

  if (from.fullPath === to.fullPath && to.name === "authComponent") return;

  const auth = useAuth();

  const isAuthenticated = await auth.check(path);

  if (!isAuthenticated) {
    console.log(auth.authRedirection());

    return navigateTo(auth.authRedirection(), { external: true });
  }
});
