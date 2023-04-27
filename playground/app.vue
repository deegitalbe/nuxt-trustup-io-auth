<template>
  <div>
    <h1>App</h1>
    <div v-if="!auth.isLoading">
      <NuxtPage />
    </div>
    <div v-else>loading</div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "#imports";

const auth = useAuth();
</script>
