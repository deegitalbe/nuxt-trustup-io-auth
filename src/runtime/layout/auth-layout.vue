<template>
  <div>
    <slot v-if="!auth.isLoading && auth.user" />
    <div v-else>
      <AppLoader />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppLoader } from "@deegital/vue-3-trustup-io-loader";
import { useAuth } from "#imports";
const auth = useAuth();
</script>
