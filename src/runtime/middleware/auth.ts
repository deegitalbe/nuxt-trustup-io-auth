import { defineNuxtRouteMiddleware, navigateTo, useRouter } from "nuxt/app";
import { ref } from "vue";
import { useAuth } from "../composables/useAuth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuth();

  // VERSION CLIENT ET SERVER => isAuthenticated n'a pas la meme valeur en client et server
  // const isAuthenticated = ref(false);

  // if (process.client) {
  //   isAuthenticated.value = await auth.check();
  //   console.log(isAuthenticated.value, "client");
  // }
  // console.log(isAuthenticated.value, "server");
  // if (!isAuthenticated.value) {
  //   // return navigateTo(auth.authRedirection(), { external: true });
  // }

  // VERSION FULL CLIENT => TROP DE TEMPS POUR NAVIGATE APRES AVOIR MIT LE LOADER A FALSE
  if (process.client) {
    const isAuthenticated = await auth.check();

    if (!isAuthenticated) {
      console.log("navigate to");
      return navigateTo(auth.authRedirection(), { external: true });
    }
  }
});
