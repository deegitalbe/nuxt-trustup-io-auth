import type { AuthService } from "../services";
import WindowProviderConstructor from "./WindowProvider";

const AuthServiceProviderConstructor = <TKey extends string = string>(
  key: TKey,
) => {
  const provider = WindowProviderConstructor<AuthService>(key);
  return provider;
};

export default AuthServiceProviderConstructor;
