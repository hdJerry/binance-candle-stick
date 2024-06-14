<script setup>
import ChevronIcon from '@/components/icons/ChevronIcon.vue'
</script>
<template>
  <div class="profile">
    <div class="left">
      <img alt="Vue logo" class="logo" src="@/assets/profile.svg" />
      <span class="username">Olakunle Te...</span>
    </div>

    <span>
      <ChevronIcon />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  width: 181px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-radius: 8px;
  color: var(--gray-100);
  background-color: var(--bg-dark-400);
  height: 48px;
  & > .left {
    display: flex;
    align-items: center;
    gap: 8px;

    .username {
      font: var(--text-sm-1);
    }
  }
}
</style>
