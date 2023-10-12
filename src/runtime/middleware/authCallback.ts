import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { useAuthRedirectService } from "#imports";

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return;

  const { isCallbackUrl, callbackService } = useAuthRedirectService({
    from,
    to,
  });
  if (!isCallbackUrl.value) return;

  const { path, isExternal } = callbackService.getRedirection();

  return navigateTo(path, { external: isExternal });
});
