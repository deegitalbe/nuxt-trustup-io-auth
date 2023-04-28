import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { useAuth } from "../composables/useAuth";

export default defineNuxtRouteMiddleware(async () => {
  const auth = useAuth();

  if (process.client) {
    const isAuthenticated = await auth.check();

    if (!isAuthenticated) {
      return navigateTo(auth.authRedirection(), { external: true });
    }
  }
});
