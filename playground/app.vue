<template>
  <div>
    <NuxtLayout :name="TRUSTUP_IO_AUTH_CONFIG.AUTH_LAYOUT_NAME">
      <div>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { TRUSTUP_IO_AUTH_CONFIG } from "@deegital/vue-trustup-io-auth";
</script>
