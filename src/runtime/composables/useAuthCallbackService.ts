import { navigateTo, useRoute, useRouter } from "#app";
import { useAuthCallbackService as useVueAuthCallbackService } from "@deegital/vue-trustup-io-auth";
import { useVueApp } from "#imports";

const useAuthCallbackService = async () => {
  const { getRedirection } = useVueAuthCallbackService({
    app: useVueApp(),
    router: useRouter(),
    route: useRoute(),
  });

  const { path, isExternal } = await getRedirection();

  return navigateTo(path, { external: isExternal });
};

export default useAuthCallbackService;
