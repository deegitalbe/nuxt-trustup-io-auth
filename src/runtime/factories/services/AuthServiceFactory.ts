import { LocalStorageProviderConstructor } from "../../providers";
import { AuthServiceConstructor } from "../../services";
import { UserEndpointFactoryConstructor } from "../endpoints";

const AuthServiceFactoryConstructor = () => {
  const create = ({
    authUrl,
    storageKey,
    accessRoles,
  }: {
    authUrl: string;
    storageKey: string;
    accessRoles: string[];
  }) => {
    const tokenProvider = LocalStorageProviderConstructor(storageKey);
    const userEndpointFactory = UserEndpointFactoryConstructor();

    return AuthServiceConstructor({
      userEndpointFactory,
      tokenProvider,
      authUrl,
      accessRoles,
    });
  };

  return { create };
};

export type AuthServiceFactory = ReturnType<typeof AuthServiceConstructor>;
export default AuthServiceFactoryConstructor;
