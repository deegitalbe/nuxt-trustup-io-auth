import { useAuthLayoutService as useVueAuthLayoutService } from "@deegital/vue-trustup-io-auth";
import { useVueApp } from "#imports";

const useAuthLayoutService = () =>
  useVueAuthLayoutService({
    app: useVueApp(),
  });

export default useAuthLayoutService;
