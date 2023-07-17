import { useAuth as useVueAuth } from "@deegital/vue-trustup-io-auth";
import { useVueApp } from "#imports";

const useAuth = () => useVueAuth(useVueApp());

export default useAuth;
