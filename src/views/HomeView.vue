<script setup lang="ts">
import CandleStick from '@/components/CandleStick.vue'
import { useGeneralStore } from '@/stores/general'

import { defineAsyncComponent } from 'vue'

const generalStore = useGeneralStore()

const cardStyle = generalStore.cardStyle

const tabs = [
  {
    title: 'Open Orders',
    id: 'open-orders',
    component: defineAsyncComponent(() => import('./components/OpenOrders.vue'))
  },
  {
    title: 'Positions',
    id: 'open-positions',
    component: defineAsyncComponent(() => import('./components/OpenPositions.vue'))
  },
  {
    title: 'Order History',
    id: 'order-history',
    component: defineAsyncComponent(() => import('./components/OrderHistory.vue'))
  },
  {
    title: 'Trade History',
    id: 'trade-history',
    component: defineAsyncComponent(() => import('./components/TradeHistory.vue'))
  }
]
</script>

<template>
  <main>
    <second-nav />
    <div class="content">
      <div class="left">
        <div class="top">
          <v-card
            class="chart vcard"
            :variant="cardStyle.variant"
            :color="cardStyle.color"
          ></v-card>
          <v-card class="vcard" :variant="cardStyle.variant" :color="cardStyle.color"></v-card>
        </div>
        <v-card class="bottom vcard" :variant="cardStyle.variant" :color="cardStyle.color">
          <vv-tabs :tabs="tabs" />
        </v-card>
      </div>
      <v-card class="right vcard" :variant="cardStyle.variant" :color="cardStyle.color"> </v-card>
    </div>
    <CandleStick v-if="false" />
  </main>
</template>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: 1fr;
  padding: 8px 0;
  column-gap: 8px;
  height: 100%;
  @media (min-width: 1028px) {
    grid-template-columns: 1fr 255px;
  }

  .vcard {
    background-color: var(--bg-dark-300);
  }

  .right {
    height: 100%;
    background-color: var(--bg-dark-300);
    @media (min-width: 1028px) {
      height: 625px;
    }
  }

  .left {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    .top {
      display: grid;
      grid-template-columns: 1fr;
      gap: 8px;
      @media (min-width: 1028px) {
        grid-template-columns: 1fr 245px;
        height: 561px;
      }

      .chart {
        display: none;
        @media (min-width: 1028px) {
          display: block;
        }
      }
    }

    .bottom {
      padding: 16px;
      @media (min-width: 1028px) {
        height: 561px;
      }
    }
  }
}
</style>
