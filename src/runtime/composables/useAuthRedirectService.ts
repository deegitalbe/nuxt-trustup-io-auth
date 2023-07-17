import { RouteLocationNormalized } from "vue-router";
import { useAuthRedirectService as useVueAuthRedirectService } from "@deegital/vue-trustup-io-auth";
import { useVueApp } from "#imports";

const useAuthRedirectService = ({
  from,
  to,
}: {
  from: RouteLocationNormalized;
  to: RouteLocationNormalized;
}) => useVueAuthRedirectService({ app: useVueApp(), from, to, location });

export default useAuthRedirectService;
