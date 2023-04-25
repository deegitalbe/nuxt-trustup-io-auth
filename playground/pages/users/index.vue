<template>
  <div>
    page protected by middleware
    <NuxtLink to="/">back home</NuxtLink>
    <h1>{{ auth }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { useAuth } from "@deegital/vue-trustup-io-auth";

const auth = useAuth();
</script>
