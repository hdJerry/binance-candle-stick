<script lang="ts" setup>
import ProfileOption from '@/components/ProfileOption.vue'
import GlobeIcon from '@/components/icons/GlobeIcon.vue'
import LogOutIcon from '@/components/icons/LogOutIcon.vue'

const navLinks = [
  {
    text: 'Exchange',
    to: '/'
  },
  {
    text: 'Wallets',
    to: '/wallets'
  },
  {
    text: 'Roqqu Hub',
    to: '/roqqu-hub'
  }
]
</script>
<template>
  <nav class="nav">
    <div class="nav-left">
      <div class="logo-container">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
      </div>
      <div class="nav-links">
        <router-link v-for="navLink in navLinks" :key="navLink.to" :to="navLink.to">{{
          navLink.text
        }}</router-link>
      </div>
    </div>
    <div class="nav-right">
      <ProfileOption />
      <GlobeIcon />
      <LogOutIcon />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  padding: 12px 16px 10px 32px;
  background-color: var(--bg-dark-200);
  border-bottom: 1px solid var(--gray-200);
  .logo-container {
    border-right: 1px solid var(--gray-100);
    padding-right: 40px;
  }

  &-left,
  &-right,
  .nav-links {
    display: flex;
    align-items: center;
  }
  &-left {
    gap: 32px;
    .nav-links {
      gap: 48px;
    }
  }
  &-right {
    gap: 16px;
  }
}
</style>
