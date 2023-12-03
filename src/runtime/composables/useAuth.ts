import { AuthServiceProviderConstructor } from "../providers";
import { useRuntimeConfig } from "#imports";

const useAuth = () => {
  const {
    public: { trustupIoAuth },
  } = useRuntimeConfig();
  const provider = AuthServiceProviderConstructor(
    trustupIoAuth.localStorageKey,
  );

  return provider.get();
};

export default useAuth;
