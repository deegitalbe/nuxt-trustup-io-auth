<template>
  <div>
    <div v-if="shouldDisplayApp">
      <slot />
    </div>
    <div v-else>
      <AppLoader />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppLoader } from "@deegital/vue-3-trustup-io-loader";
import { useAuthLayoutService } from "#imports";

const { shouldDisplayApp } = useAuthLayoutService();
</script>
