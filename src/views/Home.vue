<template>
  <div class="demo-container">
    <InfoCard :title="title" :infoList="infoList" />
    <LiquidChart :value="0.5" height="200px" width="200px" />
  </div>
</template>

<script lang="ts" setup>
import InfoCard from '@/components/InfoCard.vue'
import LiquidChart from '@/components/LiquidChart.vue'

const title = '项目详情'
const infoList = [
  { label: '项目名称', value: '某某某项目' },
  { label: '项目类型', value: '交通基础设施' },
  { label: '生成时间', value: '燃气企业经营许可证' },
  { label: '项目地址', value: '苏州市-常熟市' },
  { label: '所在街道', value: 'SDFG8372673627362' },
  { label: '建设单位', value: '某某某建设单位' },
  { label: '开始时间', value: '2024年8月14日' },
  { label: '结束时间', value: '2027年8月14日' }
]
</script>

<style scoped>
.demo-container {
  padding: 20px;
  background-color: #fff;
  min-height: 100vh;
}
</style>