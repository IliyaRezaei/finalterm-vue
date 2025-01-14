<script setup>
const props = defineProps(['imageWidth', 'imageHeight', 'articleImage'])
</script>

<template>
  <div
    class="article-image-container"
    :style="{ width: props.imageWidth + 'px', height: props.imageHeight + 'px' }"
  >
    <img :src="articleImage" />
  </div>
</template>

<style scoped>
.article-image-container {
}
.article-image-container img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
}
</style>
