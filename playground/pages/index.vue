<template>
  <div>
    <div>Index</div>
    <NuxtLink to="/users">go to users</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useAuth } from "#imports";

const isReady = ref<boolean>(false);
const auth = useAuth();

onMounted(() => {
  isReady.value = true;
  auth.check();
});
</script>
