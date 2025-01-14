<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps(['articleReadTime', 'articleCategory', 'componentStyle'])

const styles = ref({})
function styler() {
  if (props.componentStyle === 'light') {
    styles.value.articleReadTime = 'color: #ccc;'
    styles.value.articleCategory =
      'color: var(--primary-blue-color); background-color: var(--secondary-blue-color);'
    styles.value.articleInfoSpacer = 'background-color: #ccc'
  } else {
    styles.value.articleReadTime = 'color: var(--primary-gray-color);'
    styles.value.articleCategory =
      'color: var(--primary-blue-color); background-color: rgb(222, 234, 246);'
    styles.value.articleInfoSpacer = 'color: var(--primary-gray-color);'
  }
}
onMounted(() => {
  styler()
})
</script>

<template>
  <div class="article-info-container">
    <div class="article-read-time" :style="styles.articleReadTime">{{ articleReadTime }}</div>
    <div class="dot-spacer" :style="styles.articleInfoSpacer"></div>
    <div class="article-category" :style="styles.articleCategory">{{ articleCategory }}</div>
  </div>
</template>

<style scoped>
.article-info-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
}
.dot-spacer {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: gray;
}
.article-read-time {
}

.article-category {
  padding: 4px 8px;
  border-radius: 8px;
}
</style>
