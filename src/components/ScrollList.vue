<template>
  <div
    class="scroll-container"
    @wheel.prevent="handleWheel"
  >
    <component
      :is="Vue3SeamlessScroll"
      :list="list"
      :hover="true"
      :step="0.5"
      :limitScrollNum="3"
      class="scroll-content"
      ref="scrollRef"
    >
      <div v-for="(item, index) in list" :key="index" class="scroll-item">
        <slot name="item" :item="item">
          {{ item }}
        </slot>
      </div>
    </component>
  </div>
</template>

<script lang="ts" setup>
import { markRaw, ref } from 'vue'
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll'

const seamlessScroll = markRaw(Vue3SeamlessScroll)
const scrollRef = ref()

defineProps<{
  list: any[]
}>()

// 处理滚轮事件
const handleWheel = (e: WheelEvent) => {
  if (!scrollRef.value) return

  const scrollWrapper = scrollRef.value.$el
  const scrollAmount = e.deltaY > 0 ? 30 : -30 // 根据滚动方向决定滚动距离
  scrollWrapper.scrollTop += scrollAmount
}
</script>

<style scoped>
.scroll-container {
  width: 100%;
  height: 300px;
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
}

.scroll-content {
  height: 100%;
  overflow-y: auto;
}

.scroll-item {
  padding: 10px 15px;
  border-bottom: 1px solid #f5f5f5;
}

.scroll-item:hover {
  background-color: #f5f7fa;
}

/* 自定义滚动条样式 */
.scroll-content::-webkit-scrollbar {
  width: 6px;
}

.scroll-content::-webkit-scrollbar-thumb {
  background-color: #ddd;
  border-radius: 3px;
}

.scroll-content::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}
</style>