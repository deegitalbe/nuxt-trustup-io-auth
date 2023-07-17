<template>
  <div>
    <h1>App</h1>
    <code>{{ auth }}</code>
    <div>
      <NuxtLayout name="auth">
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "#imports";
const auth = useAuth();
</script>
