<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps(['articleTitle', 'articleText', 'componentStyle'])
const styles = ref({})
function styler() {
  if (props.componentStyle === 'light') {
    styles.value.articleTitleStyle = 'color: white;'
    styles.value.articleTextStyle = 'color: #ccc'
  } else {
    styles.value.articleTitleStyle = 'color: var(--primary-text-color);'
    styles.value.articleTextStyle = 'color: var(--secondary-text-color);'
  }
}
onMounted(() => {
  styler()
})
</script>

<template>
  <div class="article-content-container">
    <div class="article-title" :style="styles.articleTitleStyle">
      {{ articleTitle }}
    </div>
    <div class="article-text" :style="styles.articleTextStyle">{{ articleText }}</div>
  </div>
</template>

<style scoped>
.article-content-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
}
.article-title {
  font-weight: 700;
  font-size: 1.1rem;
}
.article-text {
}
</style>
