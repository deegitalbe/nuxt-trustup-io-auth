import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { useAuthRedirectService } from "#imports";

export default defineNuxtRouteMiddleware((to, from) => {
  const service = useAuthRedirectService({ from, to });
  const navigate = async () => {
    const { success, redirect } = await service.getRedirection();
    if (!success) return;
    const { path, isExternal: external } = redirect;
    return navigateTo(path, { external });
  };
  navigate();
});
