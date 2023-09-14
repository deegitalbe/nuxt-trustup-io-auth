<template>
  <div>
    <ul class="flex gap-6">
      <li>
        <NuxtLink to="/">home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/users">users</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/testing">testing</NuxtLink>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
<script setup lang="ts"></script>
