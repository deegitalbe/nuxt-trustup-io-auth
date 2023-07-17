<template>
  <div>
    <slot v-if="shouldDisplayApp" />
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
