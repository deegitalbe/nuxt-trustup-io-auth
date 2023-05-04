<template>
  <div>
    <slot
      v-if="
        (!auth.isLoading && auth.user) ||
        route.path == '/trustup-io/auth/callback'
      "
    />
    <div v-else>
      <AppLoader />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppLoader } from "@deegital/vue-3-trustup-io-loader";
import { useAuth, useRoute } from "#imports";
const auth = useAuth();

const route = useRoute();
</script>
