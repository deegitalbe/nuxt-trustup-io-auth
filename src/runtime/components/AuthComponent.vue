<template>
  <div>
    <h1>
      Page qui set dans le localstorage le token en le récuperant dans l'url
    </h1>
  </div>
</template>

<script lang="ts" setup>
import { navigateTo, useRoute } from "nuxt/app";
import { useAuth } from "../composables/useAuth";

const route = useRoute();

const token = route.query.token;

const auth = useAuth();

if (process.client) {
  localStorage.setItem(auth.localStorageKey, token);
}

auth.check();

navigateTo("/");
</script>
