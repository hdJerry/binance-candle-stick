<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav-bar />
  </header>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style lang="scss">
nav {
  a {
    text-decoration: none;
    color: var(--gray-100);
    font: var(--text-sm);
    transition: color 0.3s ease-in-out;
    &.router-link-exact-active,
    &:hover {
      color: var(--vt-c-white);
    }
  }
}

.wrapper {
  @media (min-width: 1028px) {
    padding: 8px;
  }
}
</style>
