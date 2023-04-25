import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { ref } from "#imports";

const useFakeState = () => {
  const hasLoaded = ref(false);
  const setAsLoaded = () => (hasLoaded.value = true);
  return {
    hasLoaded,
    setAsLoaded,
  };
};

const fakeState = useFakeState();

export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`middleware running from ${from.path} to ${to.path}`);
  const { hasLoaded, setAsLoaded } = fakeState;
  if (hasLoaded.value) {
    console.log(`middleware accepted navigation to go to ${to.path}`);
    return;
  }

  console.log("middleware redirected to /auth");
  setAsLoaded();
  return navigateTo("/auth");
});
