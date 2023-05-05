import {
  addRouteMiddleware,
  addPlugin,
  createResolver,
  defineNuxtModule,
  addImports,
  // addComponent,
  extendPages,
  addLayout,
} from "@nuxt/kit";

import { defu } from "defu";

// Module options TypeScript interface definition
export type ModuleOptions = {
  localStorageKey: string;
};

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@deegital/nuxt-trustup-io-auth",
    configKey: "trustupIoAuth",
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    nuxt.options.runtimeConfig.public.trustupIoAuth = defu(
      nuxt.options.runtimeConfig.public.trustupIoAuth,
      {
        localStorageKey: options.localStorageKey || "auth_token",
      }
    );

    extendPages((pages) => {
      pages.push({
        name: "authComponent",
        path: "/trustup-io/auth/callback",
        file: resolve("./runtime/pages/AuthComponent.vue"),
      });
    });

    addPlugin(resolve("./runtime/plugins/authPluginProxy"));

    addImports({
      name: "useAuth",
      from: "@deegital/vue-trustup-io-auth",
    });

    addRouteMiddleware({
      name: "trustupIoAuthMiddleware",
      path: resolve("./runtime/middleware/auth"),
      global: true,
    });

    addLayout(
      {
        src: resolve("./runtime/layout/auth-layout.vue"),
      },
      "auth-layout"
    );
  },
});
