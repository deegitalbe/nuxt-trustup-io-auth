import { AuthServiceFactoryConstructor } from "../factories";
import { AuthServiceProviderConstructor } from "../providers";
import { defineNuxtPlugin, useRuntimeConfig } from "#imports";

const trustupIoAuthPlugin = defineNuxtPlugin(() => {
  const { public: config } = useRuntimeConfig();
  const { trustupIoAuthUrl } = config;
  const { accessRoles, authUrl, localStorageKey } = config.trustupIoAuth;
  const trustupIoAuth = {
    localStorageKey: localStorageKey || "trustup-io-auth-token",
    authUrl: authUrl || trustupIoAuthUrl,
    accessRoles,
  };
  config.trustupIoAuth = trustupIoAuth;

  const serviceFactory = AuthServiceFactoryConstructor();
  const authService = serviceFactory.create({
    storageKey: trustupIoAuth.localStorageKey,
    authUrl: trustupIoAuth.authUrl,
    accessRoles: trustupIoAuth.accessRoles,
  });
  const provider = AuthServiceProviderConstructor(
    trustupIoAuth.localStorageKey,
  );
  provider.set(authService);
});

export default trustupIoAuthPlugin;
