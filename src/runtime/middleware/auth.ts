import { useAuth } from "@deegital/vue-trustup-io-auth";
import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  const path = window.location.origin + to.fullPath;

  if (from.fullPath === to.fullPath && to.name === "authComponent") return;

  const method = async () => {
    const auth = useAuth();

    const isAuthenticated = await auth.check(path);

    if (!isAuthenticated) {
      console.log(auth.authRedirection());

      return navigateTo(auth.authRedirection(), { external: true });
    }
  };

  method();
});
