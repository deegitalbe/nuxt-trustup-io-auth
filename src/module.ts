import { AuthConstructorOptions } from "@deegital/vue-trustup-io-auth/dist/lib/types";
import {
  addRouteMiddleware,
  addPlugin,
  createResolver,
  defineNuxtModule,
  addImports,
  // createResolver,
  // addComponent,
  // addImports,
} from "@nuxt/kit";
import { defu } from "defu";
import useAuthConfig from "./runtime/composables/useAuthConfig";

// Module options TypeScript interface definition
export type ModuleOptions = AuthConstructorOptions;

export default defineNuxtModule<AuthConstructorOptions>({
  meta: {
    name: "@deegital/nuxt-trustup-io-auth",
    configKey: "trustupIoAuth",
  },
  setup(options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);

    const config = useAuthConfig();

    config.create(options);

    // addPlugin(resolve("./runtime/plugins/authPluginProxy.ts"));

    addImports({
      name: "useAuth",
      from: resolve("./runtime/composables/useAuth"),
    });

    addRouteMiddleware({
      name: "trustupIoAuthMiddleware",
      path: resolve("./runtime/middleware/auth"),
      global: true,
    });
  },
});
