import {
  addRouteMiddleware,
  addPlugin,
  createResolver,
  defineNuxtModule,
  addImports,
  addLayout,
  extendPages,
} from "@nuxt/kit";

import { defu } from "defu";
import { TRUSTUP_IO_AUTH_CONFIG } from "./runtime/utils";

type AuthPluginOptions = {
  accessRoles: string[];
  localStorageKey?: string;
  authUrl?: string;
};

export default defineNuxtModule<AuthPluginOptions>({
  meta: {
    name: "@deegital/nuxt-trustup-io-auth",
    configKey: "trustupIoAuth",
  },
  setup(options, nuxt) {
    const { accessRoles, localStorageKey, authUrl } = options;
    const { resolve } = createResolver(import.meta.url);

    const { public: runtimeConfig } = nuxt.options.runtimeConfig;

    runtimeConfig.trustupIoAuth = defu(
      runtimeConfig.trustupIoAuth,
      {
        accessRoles,
        localStorageKey,
        authUrl,
      },
      {
        localStorageKey: "trustup-io-auth-token",
        authUrl: runtimeConfig.trustupIoAuthUrl,
      },
    );

    extendPages((pages) => {
      pages.push({
        name: TRUSTUP_IO_AUTH_CONFIG.AUTH_CALLBACK_NAME,
        path: TRUSTUP_IO_AUTH_CONFIG.AUTH_CALLBACK_PATH,
        file: resolve("./runtime/pages/callback"),
      });
    });

    addPlugin(resolve("./runtime/plugins/authPlugin"));

    addImports({
      name: "useAuth",
      from: resolve("./runtime/composables/index"),
    });

    addImports({
      name: "useAuthConfig",
      from: resolve("./runtime/composables/index"),
    });

    addRouteMiddleware({
      name: "trustup-io-auth-check",
      path: resolve("./runtime/middleware/checkMiddleware"),
      global: true,
    });

    addLayout(
      { src: resolve("./runtime/layouts/authLayout.vue") },
      TRUSTUP_IO_AUTH_CONFIG.AUTH_LAYOUT_NAME,
    );
  },
});
