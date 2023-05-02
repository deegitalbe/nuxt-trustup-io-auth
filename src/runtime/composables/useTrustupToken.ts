import { navigateTo, useRoute } from "nuxt/app";
import { useAuth } from "./useAuth";

const useTrustupToken = () => {
  const route = useRoute();

  const token = route.query.token;
  const path = route.query.path;

  const auth = useAuth();

  if (typeof token !== "string") {
    return navigateTo("/");
  }
  localStorage.setItem(auth.localStorageKey, token);

  if (typeof path === "string") {
    return navigateTo(path);
  }
};

export { useTrustupToken };