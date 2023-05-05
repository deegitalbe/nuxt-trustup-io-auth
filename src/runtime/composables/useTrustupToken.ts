import { navigateTo } from "nuxt/app";
import { useAuth } from "./useAuth";
import { useQueryParameter } from "./useQueryParameter";

const useTrustupToken = () => {
  let token = useQueryParameter("token");
  const path = useQueryParameter("path") || useQueryParameter("amp;path");

  if (path === undefined) {
    navigateTo("/");
  }

  const auth = useAuth();

  if (typeof token !== "string") {
    return navigateTo("/");
  }
  // TODO Fix ?
  token = token.replace("Bearer ", "");

  localStorage.setItem(auth.localStorageKey, token);

  if (typeof path !== "string") {
    return navigateTo("/");
  }

  if (path.includes("http")) {
    navigateTo(path, { external: true });
  }

  if (!path.startsWith("/")) {
    navigateTo("/" + path);
  }
};

export { useTrustupToken };
