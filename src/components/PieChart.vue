<template>
  <div ref="chartRef" class="chart-container"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const props = withDefaults(defineProps<{
  width?: string
  height?: string
}>(), {
  width: '100%',
  height: '400px'
})

const chartRef = ref<HTMLElement | null>(null)
let chartInstance: echarts.ECharts | null = null

const initChartOption = () => {
  return {
    backgroundColor: '#0B1C51',
    title: [{
      text: '总数',
      left: '50%',
      top: '44%',
      textAlign: 'center',
      textStyle: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'normal'
      }
    }, {
      text: '2664',
      left: '50%',
      top: '52%',
      textAlign: 'center',
      textStyle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
      }
    }],
    series: [
      // 外层主饼图
      {
        type: 'pie',
        radius: ['65%', '85%'],
        center: ['50%', '50%'],
        data: [
          { value: 1330, name: '已交底', itemStyle: { color: '#4B5EE7' } },
          { value: 320, name: '供水未交底', itemStyle: { color: '#36C5F7' } },
          { value: 320, name: '燃气未交底', itemStyle: { color: '#FFB148' } },
          { value: 133, name: '其他未交底', itemStyle: { color: '#45D5B6' } }
        ],
        label: {
          show: true,
          position: 'outside',
          formatter: '{b}\n{d}%',
          color: '#fff',
          fontSize: 14,
          lineHeight: 20
        },
        labelLine: {
          show: true,
          length: 20,
          length2: 30,
          lineStyle: {
            color: '#fff'
          }
        },
        emphasis: {
          scale: true,
          scaleSize: 10
        }
      },
      // 内层发光环 - 最亮
      {
        type: 'pie',
        radius: ['0%', '46%'],
        center: ['50%', '50%'],
        silent: true,
        data: [{
          value: 1,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(47, 130, 255, 0.65)' },
              { offset: 1, color: 'rgba(13, 84, 191, 0.4)' }
            ]),
            shadowBlur: 14,
            shadowColor: 'rgba(64, 152, 255, 0.5)'
          }
        }],
        label: { show: false }
      },
      // 外层装饰环 - 较亮
      {
        type: 'pie',
        radius: ['88%', '89%'],
        center: ['50%', '50%'],
        silent: true,
        data: [{
          value: 1,
          itemStyle: {
            color: 'rgba(99, 126, 255, 0.3)'
          }
        }],
        label: { show: false }
      },
      // 外层装饰环 - 较暗
      {
        type: 'pie',
        radius: ['91%', '92%'],
        center: ['50%', '50%'],
        silent: true,
        data: [{
          value: 1,
          itemStyle: {
            color: 'rgba(99, 126, 255, 0.1)'
          }
        }],
        label: { show: false }
      }
    ]
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

// 暴露更新数据的方法
const updateData = (newData: { value: number; name: string }[]) => {
  if (chartInstance) {
    chartInstance.setOption({
      series: [{
        data: newData
      }]
    })
  }
}

defineExpose({
  updateData
})
</script>

<style scoped>
.chart-container {
  width: v-bind(width);
  height: v-bind(height);
}
</style>