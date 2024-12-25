<template>
  <div class="scroll-demo">
    <h2>无限滚动列表</h2>
    <ScrollList :list="listData">
      <template #item="{ item }">
        <div class="item-content">
          <span>{{ item.title }}</span>
          <span>{{ item.time }}</span>
        </div>
      </template>
    </ScrollList>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ScrollList from '@/components/ScrollList.vue'

const listData = ref([
  { title: '消息1', time: '10:00' },
  { title: '消息2', time: '10:01' },
  { title: '消息3', time: '10:02' },
  { title: '消息4', time: '10:03' },
  { title: '消息5', time: '10:04' },
  { title: '消息6', time: '10:05' },
  { title: '消息7', time: '10:06' },
  { title: '消息8', time: '10:07' },
])
</script>

<style scoped>
.scroll-demo {
  padding: 20px;
}

.item-content {
  display: flex;
  justify-content: space-between;
}
</style>