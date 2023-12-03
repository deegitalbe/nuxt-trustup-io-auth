import { TRUSTUP_IO_AUTH_CONFIG } from "../utils";
import { defineNuxtRouteMiddleware, navigateTo, useAuth } from "#imports";

const checkMiddleware = defineNuxtRouteMiddleware((to) => {
  if (process.server) return;

  const { check, setToken } = useAuth();

  const isCallback = TRUSTUP_IO_AUTH_CONFIG.AUTH_CALLBACK_NAME === to.name;

  if (isCallback) {
    const { path, external } = setToken(to);
    return navigateTo(path, { external });
  }

  const navigate = async () => {
    const { success, redirect } = await check();
    if (success) return;
    const { path, external } = redirect;
    return navigateTo(path, { external });
  };

  navigate();
});

export default checkMiddleware;
