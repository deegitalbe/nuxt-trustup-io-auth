<template>
  <div>
    <NuxtLayout :name="AUTH_LAYOUT_NAME">
      <div>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useAuthConfig } from "#imports";

const { AUTH_LAYOUT_NAME } = useAuthConfig();
</script>
