import { useAuthLayoutService as useVueAuthLayoutService } from "@deegital/vue-trustup-io-auth";
import { useRoute, useVueApp } from "#imports";

const useAuthLayoutService = () =>
  useVueAuthLayoutService({
    app: useVueApp(),
    route: useRoute(),
  });

export default useAuthLayoutService;
