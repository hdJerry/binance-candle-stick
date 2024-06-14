<template>
  <div>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab v-for="tab in tabs" :key="tab.id" :value="tab.id">{{ tab.title }}</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item v-for="tab in tabs" :key="tab.id" :value="tab.id">
        <component :is="tab.component" />
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{ tabs: { title: string; id: string | number; component: any }[] }>()
const tab = ref()
</script>
