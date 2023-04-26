<template>
  <div>
    page protected by middleware
    <NuxtLink to="/">back home</NuxtLink>
    <h1>{{ auth.user }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { useAuth } from "#imports";

const auth = useAuth();
</script>
