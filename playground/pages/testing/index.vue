<template>
  <div
    class="h-screen w-screen flex items-center justify-center bg-gradient-to-br to-cyan-600 from-blue-500"
  >
    <Transition
      enter-from-class="opacity-0 scale-75"
      enter-active-class="transition-all transform duration-1000"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-active-class="transition-all transform duration-1000"
      leave-to-class="opacity-0 scale-75"
    >
      <div v-if="isReady">
        <div
          class="text-center p-8 rounded-full bg-white w-[650px] h-[650px] shadow-lg"
        >
          <div>
            <div class="text-[300px]">🎉</div>
            <div></div>
            <h1>Page index</h1>
            <NuxtLink to="/users">users</NuxtLink>
            <div v-if="isOk()" class="text-2xl text-gray-600 font-thin">
              {{ user.first_name }}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useAuth } from "#imports";

const isReady = ref<boolean>(false);

const { user, isOk } = useAuth();

onMounted(() => {
  isReady.value = true;
});
</script>
