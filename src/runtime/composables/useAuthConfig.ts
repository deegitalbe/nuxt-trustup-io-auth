import { reactive } from "vue";
import AuthConfig from "../services/AuthConfig";

const config = new AuthConfig();

const useAuthConfig = () => {
  return reactive(config);
};
export default useAuthConfig;
