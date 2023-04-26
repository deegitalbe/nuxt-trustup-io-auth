import { UnwrapNestedRefs } from "nuxt/dist/app/compat/capi";
import AuthLogic from "@deegital/vue-trustup-io-auth/dist/lib";
import useAuthConfig from "./useAuthConfig";

const useAuth = () => {
  const config = useAuthConfig();
  return config.auth as UnwrapNestedRefs<AuthLogic>;
};

export default useAuth;
