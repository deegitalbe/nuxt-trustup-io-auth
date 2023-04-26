import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { useAuth } from "../composables/useAuth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuth();

  // if (process.client) {
  //   await auth.check().then((response) => {
  //     console.log(auth.token);
  //     if (!response) {
  //       return navigateTo(auth.authRedirection(), { external: true });
  //     }
  //   });
  // }

  if (process.client) {
    const response = await auth.check();
    console.log(response);
    if (!response) {
      return navigateTo(auth.authRedirection(), { external: true });
    }
  }
});
