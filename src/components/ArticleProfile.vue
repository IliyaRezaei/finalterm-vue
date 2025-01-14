<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps(['authorName', 'authorImage', 'articleDate', 'componentStyle'])

const styles = ref({})
function styler() {
  if (props.componentStyle === 'light') {
    styles.value.articleUsername = 'color: white;'
    styles.value.articleDate = 'color: #ccc'
  } else {
    styles.value.articleUsername = 'color: var(--secondary-text-color);'
    styles.value.articleDate = 'color: var(--primary-gray-color);'
  }
}
onMounted(() => {
  styler()
})
</script>

<template>
  <div class="article-profile-container" :class="$attrs">
    <div class="article-user-image"><img :src="authorImage" /></div>
    <div class="article-profile-content-container">
      <div class="article-user-name" :style="styles.articleUsername">{{ authorName }}</div>
      <div class="article-date" :style="styles.articleDate">{{ articleDate }}</div>
    </div>
  </div>
</template>

<style scoped>
.article-profile-container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}

.article-user-image {
  width: 42px;
  height: 42px;
}
.article-user-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.article-profile-content-container {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.article-user-name {
  font-size: 0.9rem;
}
.article-date {
  font-size: 0.8rem;
}
.color-white {
  color: white;
}
</style>
