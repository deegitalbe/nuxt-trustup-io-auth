import { defineNuxtRouteMiddleware } from "nuxt/app";
import { useAuthCallbackMiddleware } from "#imports";

export default defineNuxtRouteMiddleware(useAuthCallbackMiddleware);
