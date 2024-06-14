<script lang="ts" setup>
defineProps<{ text: string; color: string }>()
</script>

<template>
  <span class="text-wrapper">
    <slot name="left-icon" />
    {{ text }}
    <slot name="righ-icon" />
  </span>
</template>

<style lang="scss" scoped>
.text-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
  color: v-bind(color);
}
</style>
