import { AuthConstructorOptions } from "@deegital/vue-trustup-io-auth/dist/lib/types";
import {
  addPlugin,
  createResolver,
  defineNuxtModule,
  // createResolver,
  // addComponent,
  // addImports,
} from "@nuxt/kit";
import { defu } from "defu";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@deegital/nuxt-trustup-io-auth",
    configKey: "trustupIoAuth",
  },
  defaults: {},
  setup(options, nuxt) {
    nuxt.options.runtimeConfig.public.trustupIoAuth = defu(
      nuxt.options.runtimeConfig.public.trustupIoAuth,
      {
        callbackUrl: options.callbackUrl,
        localStorageKey: options.localStorageKey,
        authBackendUrl: options.authBackendUrl,
      }
    );

    const { resolve } = createResolver(import.meta.url);
    addPlugin(resolve("./runtime/plugins/authPluginProxy.ts"));
  },
});
