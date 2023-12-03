import { AuthServiceFactoryConstructor } from "../factories";
import { AuthServiceProviderConstructor } from "../providers";
import { defineNuxtPlugin, useRuntimeConfig } from "#imports";

const trustupIoAuthPlugin = defineNuxtPlugin(() => {
  const {
    public: { trustupIoAuth },
  } = useRuntimeConfig();
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
