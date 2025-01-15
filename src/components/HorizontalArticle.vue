<script setup>
import ArticleProfile from '@/components/ArticleProfile.vue'
import ArticleImage from './ArticleImage.vue'
import ArticleContent from './ArticleContent.vue'
import ArticleInfo from './ArticleInfo.vue'

const props = defineProps([
  'userImage',
  'userName',
  'articleDate',
  'articleImageUrl',
  'articleTitle',
  'articleText',
  'articleReadTime',
  'articleCategory',
])
</script>

<template>
  <div class="horizontal-article-container">
    <div class="horizontal-article-container-image">
      <article-image
        :article-image="props.articleImageUrl"
        image-width="600"
        image-height="375"
      ></article-image>
    </div>
    <div class="horizontal-article-container-content">
      <article-profile
        :author-image="props.userImage"
        :author-name="userName"
        :article-date="props.articleDate"
      ></article-profile>
      <article-content
        :article-text="props.articleText"
        :article-title="props.articleTitle"
      ></article-content>
      <article-info
        :article-category="props.articleCategory"
        :article-read-time="props.articleReadTime"
      ></article-info>
    </div>
  </div>
</template>

<style scoped>
.horizontal-article-container {
  width: 1268px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: 2rem;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
}

.horizontal-article-container:hover {
  background-color: #eee;
}

.horizontal-article-container-image {
}

.horizontal-article-container-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
</style>
