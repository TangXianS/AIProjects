<template>
  <div class="liquid-demo">
    <h2>进度展示</h2>
    <LiquidChart ref="liquidRef" :value="0.6" />
    <button @click="updateData">更新数据</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LiquidChart from '@/components/LiquidChart.vue'

const liquidRef = ref()

const updateData = () => {
  const newValue = Math.random()
  liquidRef.value?.updateValue(newValue)
}
</script>

<style scoped>
.liquid-demo {
  padding: 20px;
}

button {
  margin-top: 20px;
  padding: 8px 16px;
  background-color: #409EFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #66b1ff;
}
</style>