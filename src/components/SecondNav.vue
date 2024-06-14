<script lang="ts" setup>
import { useGeneralStore } from '@/stores/general'
import BTCUSDIcon from './icons/BTCUSDIcon.vue'
import ChevronIcon from '@/components/icons/ChevronIcon.vue'

const generalStore = useGeneralStore()

const cardStyle = generalStore.cardStyle
</script>
<template>
  <v-card :variant="cardStyle.variant" :color="cardStyle.color">
    <div class="container">
      <div class="btcusd-title">
        <div class="title-icon">
          <BTCUSDIcon />
          <h2 class="title">BTC/USDT</h2>
        </div>
        <span class="dropdown-icon">
          <ChevronIcon />
        </span>
      </div>

      <div class="contents"></div>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
.container,
.btcusd-title,
.title-icon,
.contents {
  display: flex;
  align-items: center;
}
.container {
  padding: 24px 0 24px 16px;
  gap: 32px;

  .btcusd-title {
    gap: 16px;
    color: var(--vt-c-white);

    .dropdown-icon {
      transform: rotate(90deg);
    }
  }
  .title-icon {
    gap: 8px;

    .title {
      font: var(--text-md);
      @media (min-width: 1028px) {
        font: var(--text-xl);
      }
    }
  }

  .contents {
    gap: 32px;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 4px;
      height: 48px;
      &:not(:first-of-type) {
        border-left: 1px soild var(--gray-200);
      }
    }
  }
}
</style>
