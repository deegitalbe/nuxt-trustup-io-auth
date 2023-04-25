import { AuthConstructorOptions } from "@deegital/vue-trustup-io-auth/dist/lib/types";
import {
  addImports,
  addPlugin,
  createResolver,
  defineNuxtModule,
  addRouteMiddleware,
} from "@nuxt/kit";
import { defu } from "defu";

// Module options TypeScript interface definition
export type ModuleOptions = AuthConstructorOptions;

export default defineNuxtModule<AuthConstructorOptions>({
  meta: {
    name: "@deegital/nuxt-trustup-io-auth",
    configKey: "trustupIoAuth",
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    nuxt.options.runtimeConfig.public.trustupIoAuth = defu(
      nuxt.options.runtimeConfig.public.trustupIoAuth,
      {
        callbackUrl: options.callbackUrl,
        localStorageKey: options.localStorageKey,
        authBackendUrl: options.authBackendUrl,
      }
    );

    addPlugin(resolve("./runtime/plugins/auth"));

    addImports({
      name: "useAuth",
      from: "@deegital/vue-trustup-io-auth",
    });

    addRouteMiddleware({
      name: "trustupIoAuthMiddleware",
      path: resolve("./runtime/middlewares/auth"),
      global: true,
    });
  },
});
