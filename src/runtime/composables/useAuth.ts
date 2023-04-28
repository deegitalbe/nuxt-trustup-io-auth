import { UnwrapNestedRefs } from "vue";
import { AuthLogic } from "@deegital/vue-trustup-io-auth";
import useAuthConfig from "./useAuthConfig";

const useAuth = () => {
  const config = useAuthConfig();
  return config.auth as UnwrapNestedRefs<AuthLogic>;
};

export { useAuth };
