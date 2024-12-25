<template>
  <div ref="chartRef" class="chart-container"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'
import 'echarts-liquidfill'

const props = withDefaults(defineProps<{
  value?: number
  width?: string
  height?: string
}>(), {
  value: 0.5,
  width: '100%',
  height: '400px'
})

const chartRef = ref<HTMLElement | null>(null)
let chartInstance: echarts.ECharts | null = null

const initChartOption = () => {
  return {
    series: [{
      type: 'liquidFill',
      data: [props.value, props.value - 0.1], // 两层波浪
      radius: '80%',
      color: ['#409EFF', '#66b1ff'],
      backgroundStyle: {
        color: '#fff'
      },
      label: {
        normal: {
          formatter: (props.value * 100).toFixed(0) + '%',
          fontSize: 28,
          color: '#333'
        }
      },
      outline: {
        show: true,
        borderDistance: 5,
        itemStyle: {
          borderColor: '#409EFF',
          borderWidth: 2
        }
      }
    }]
  }
}

const initChart = () => {
  if (chartRef.value) {
    chartInstance = echarts.init(chartRef.value)
    chartInstance.setOption(initChartOption())
  }
}

const handleResize = () => {
  chartInstance?.resize()
}

onMounted(() => {
  initChart()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  chartInstance?.dispose()
  window.removeEventListener('resize', handleResize)
})

// 更新数据方法
const updateValue = (newValue: number) => {
  if (chartInstance) {
    chartInstance.setOption({
      series: [{
        data: [newValue, newValue - 0.1],
        label: {
          normal: {
            formatter: (newValue * 100).toFixed(0) + '%'
          }
        }
      }]
    })
  }
}

defineExpose({
  updateValue
})
</script>

<style scoped>
.chart-container {
  width: v-bind(width);
  height: v-bind(height);
}
</style>