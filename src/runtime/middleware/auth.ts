import { defineNuxtRouteMiddleware } from "nuxt/app";
import { useAuthMiddleware } from "#imports";

export default defineNuxtRouteMiddleware(useAuthMiddleware);
