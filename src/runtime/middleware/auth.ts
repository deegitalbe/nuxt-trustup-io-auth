import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { useAuthRedirectService } from "#imports";

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return;

  const { isCallbackUrl, getRedirection } = useAuthRedirectService({
    from,
    to,
  });

  if (isCallbackUrl.value) return;

  const navigate = async () => {
    const { success, redirect } = await getRedirection();
    if (!success) return;
    const { path, isExternal } = redirect;
    return navigateTo(path, { external: isExternal });
  };

  navigate();
});
