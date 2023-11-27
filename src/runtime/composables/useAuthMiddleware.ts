import { navigateTo, type RouteMiddleware } from "nuxt/app";
import { useAuthRedirectService } from "#imports";

const useAuthCallback: RouteMiddleware = (to, from) => {
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
};

export default useAuthCallback;
