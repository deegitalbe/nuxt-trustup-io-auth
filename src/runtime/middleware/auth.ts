import { defineNuxtRouteMiddleware, navigateTo, useRouter } from "nuxt/app";
import { ref } from "vue";
import { useAuth } from "../composables/useAuth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuth();

  if (process.client) {
    const isAuthenticated = await auth.check();

    if (!isAuthenticated) {
      return navigateTo(auth.authRedirection(), { external: true });
    }
  }
});
