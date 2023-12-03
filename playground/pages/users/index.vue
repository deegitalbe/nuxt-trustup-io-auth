<template>
  <div>
    <div>users {{ isAuthenticated }} {{ user }}</div>
    <button @click="logout">logout</button>
  </div>
</template>

<script lang="ts" setup>
import { useAuth } from "#imports";
const { isAuthenticated, logout, user } = useAuth();
</script>
