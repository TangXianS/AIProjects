<template>
  <div class="info-card">
    <div class="card-header">
      <div class="title-bg">
        <span class="title-text">{{ title }}</span>
        <div class="header-decoration"></div>
      </div>
    </div>
    <div class="card-content">
      <div v-for="(item, index) in infoList" :key="index" class="info-item">
        <span class="item-icon">
          <i class="dot-icon"></i>
        </span>
        <span class="item-label">{{ item.label }}</span>
        <span class="item-value">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface InfoItem {
  label: string
  value: string | number
}

defineProps<{
  title: string
  infoList: InfoItem[]
}>()
</script>

<style scoped>
.info-card {
  background: linear-gradient(180deg, rgba(14, 34, 83, 0.9), rgba(11, 28, 81, 0.9));
  border-radius: 4px;
  padding: 16px;
  color: #fff;
  width: 100%;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

.card-header {
  margin: -16px -16px 20px -16px;
}

.title-bg {
  position: relative;
  background: linear-gradient(90deg, #1C3E97, #0B1C51);
  padding: 12px 16px;
  display: flex;
  align-items: center;
}

.title-text {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
}

.header-decoration {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 80px;
  background: linear-gradient(90deg, transparent, rgba(59, 126, 255, 0.3));
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 24px;
}

.item-icon {
  display: inline-flex;
  align-items: center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.dot-icon {
  position: relative;
  width: 12px;
  height: 12px;
  background: radial-gradient(circle at 30% 30%, #fff 0%, #36C5F7 60%);
  border-radius: 2px;
  transform: rotate(45deg);
  box-shadow: 0 0 4px rgba(54, 197, 247, 0.6);
}

.dot-icon::after {
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9) 0%, rgba(54, 197, 247, 0.4) 60%);
  border-radius: 1px;
}

.item-label {
  color: rgba(255, 255, 255, 0.8);
  min-width: 100px;
}

.item-value {
  flex: 1;
  color: #fff;
}
</style>