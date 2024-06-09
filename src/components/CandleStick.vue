<template>
  <apex-chart type="candlestick" height="290" :options="chartOptions" :series="series">
  </apex-chart>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import candleData from '@/candle-stick.json'
const result = candleData.map((item: any) => {
  return {
    x: new Date(item[0]),
    y: [item[1], item[2], item[3], item[4]]
  }
})

const series: any = ref([{ data: result }])
const chartOptions = {
  theme: {
    mode: 'dark'
  },
  chart: {
    type: 'candlestick',
    height: 290,
    id: 'candles',
    toolbar: {
      autoSelected: 'pan',
      show: false
    },
    zoom: {
      enabled: true
    }
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: '#00C076',
        downward: '#FF6838'
      }
    }
  },
  xaxis: {
    type: 'datetime'
  }
}
onMounted(async () => {
  const payload: Record<any, any> = {
    symbol: 'BTCUSDT',
    interval: '4h',
    limit: 200
  }
  const query = new URLSearchParams(payload).toString()
  try {
    // const resp = await fetch(`https://api.binance.com/api/v3/klines?${query}`)
    // let data = await resp?.json()
    // if (data) {
    //   data = data.map((item: any) => {
    //     return {
    //       x: new Date(item[0]),
    //       y: [item[1], item[2], item[3], item[4]]
    //     }
    //   })
    //   series.value = [{ data }]
    // }
  } catch (error) {
    console.log('====================================')
    console.log(error)
    console.log('====================================')
  }
})
</script>
