import {
  addRouteMiddleware,
  addPlugin,
  createResolver,
  defineNuxtModule,
  addImports,
  addComponent,
  // createResolver,
  // addComponent,
  // addImports,
  extendPages,
} from "@nuxt/kit";
import { AuthConstructorOptions } from "@deegital/vue-trustup-io-auth/dist/lib/types";
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
        callbackUrl: options.callbackUrl + "/auth/callback",
        authBackendUrl: options.authBackendUrl,
        localStorageKey: options.localStorageKey,
      }
    );

    extendPages((pages) => {
      pages.push({
        name: "authComponent",
        path: "/auth/callback",
        file: resolve("./runtime/components/AuthComponent.vue"),
      });
    });

    addPlugin(resolve("./runtime/plugins/authPluginProxy.ts"));

    addImports({
      name: "useAuth",
      from: resolve("./runtime/composables/useAuth"),
    });

    addRouteMiddleware({
      name: "trustupIoAuthMiddleware",
      path: resolve("./runtime/middleware/auth"),
      global: true,
    });

    // addComponent({
    //   name: "AuthComponent",
    //   export: "AuthComponent",
    //   filePath: resolve("./runtime/components/AuthComponent.vue"),
    // });
  },
});
