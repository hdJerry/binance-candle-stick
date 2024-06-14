<template>
  <div class="empty-state">
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ title: string; description: string }>()
</script>

<style lang="scss" scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 148px auto;
  @media (min-width: 1028px) {
    width: 378px;
  }

  & > .title {
    color: var(--vt-c-white);
    font: var(--text-xl);
  }

  & > .description {
    color: var(--gray-100);
    font: var(--text-md);
    text-align: center;
  }
}
</style>
