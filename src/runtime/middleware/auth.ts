import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { useAuth } from "../composables/useAuth";

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
