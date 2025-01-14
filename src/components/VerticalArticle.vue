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
  <div class="vertical-article-container">
    <article-profile
      :author-image="props.userImage"
      :author-name="userName"
      :article-date="props.articleDate"
    ></article-profile>
    <article-image
      :article-image="props.articleImageUrl"
      image-width="378"
      image-height="250"
    ></article-image>
    <article-content
      :article-text="props.articleText"
      :article-title="props.articleTitle"
    ></article-content>
    <article-info
      :article-category="props.articleCategory"
      :article-read-time="props.articleReadTime"
    ></article-info>
  </div>
</template>

<style scoped>
.vertical-article-container {
  display: flex;
  width: 408px;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
}

.vertical-article-container:hover {
  background-color: #eee;
}
</style>
