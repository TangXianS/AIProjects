<template>
  <div ref="chartRef" class="chart-container"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

const props = withDefaults(defineProps<{
  width?: string
  height?: string
}>(), {
  width: '100%',
  height: '400px'
})

// 图表实例引用
const chartRef = ref<HTMLElement | null>(null)
let chartInstance: echarts.ECharts | null = null

// 模拟数据
const chartData = {
  xAxis: ['1月', '2月', '3月', '4月', '5月', '6月'],
  values: [120, 200, 150, 80, 70, 110]
}

// 初始化图表配置
const initChartOption = (): EChartsOption => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: chartData.xAxis,
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '销售额',
        type: 'bar',
        barWidth: '60%',
        data: chartData.values,
        itemStyle: {
          color: '#409EFF'
        }
      }
    ]
  }
}

// 初始化图表
const initChart = () => {
  if (chartRef.value) {
    chartInstance = echarts.init(chartRef.value)
    chartInstance.setOption(initChartOption())
  }
}

// 处理窗口大小变化
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

// 暴露更新数据的方法
const updateChartData = (newData: { xAxis: string[], values: number[] }) => {
  if (chartInstance) {
    chartInstance.setOption({
      xAxis: {
        data: newData.xAxis
      },
      series: [{
        data: newData.values
      }]
    })
  }
}

defineExpose({
  updateChartData
})
</script>

<style scoped>
.chart-container {
  width: v-bind(width);
  height: v-bind(height);
}
</style>