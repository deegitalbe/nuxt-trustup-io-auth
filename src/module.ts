import type { AuthPluginInstallOptions } from "@deegital/vue-trustup-io-auth";
import { TRUSTUP_IO_AUTH_CONFIG } from "@deegital/vue-trustup-io-auth";
import {
  addRouteMiddleware,
  addPlugin,
  createResolver,
  defineNuxtModule,
  addImports,
  extendPages,
  addLayout,
} from "@nuxt/kit";

import { defu } from "defu";

export default defineNuxtModule<Omit<AuthPluginInstallOptions, "authUrl">>({
  meta: {
    name: "@deegital/nuxt-trustup-io-auth",
    configKey: "trustupIoAuth",
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    nuxt.options.runtimeConfig.public.trustupIoAuth = defu(
      nuxt.options.runtimeConfig.public.trustupIoAuth,
      options,
    );

    extendPages((pages) => {
      pages.push({
        name: "trustup-io-auth-callback",
        path: TRUSTUP_IO_AUTH_CONFIG.AUTH_CALLBACK_PATH,
        file: resolve("./runtime/pages/trustup-io/auth/callback.vue"),
      });
    });

    addPlugin(resolve("./runtime/plugins/auth"));

    addImports({
      name: "useAuth",
      from: resolve("./runtime/composables/index"),
    });

    addImports({
      name: "useAuthCallbackService",
      from: resolve("./runtime/composables/index"),
    });

    addImports({
      name: "useAuthLayoutService",
      from: resolve("./runtime/composables/index"),
    });

    addImports({
      name: "useAuthRedirectService",
      from: resolve("./runtime/composables/index"),
    });

    addImports({
      name: "useVueApp",
      from: resolve("./runtime/composables/index"),
    });

    addRouteMiddleware({
      name: "trustup-io-auth",
      path: resolve("./runtime/middleware/auth"),
      global: true,
    });

    addLayout({ src: resolve("./runtime/layouts/auth.vue") }, "auth");
  },
});
