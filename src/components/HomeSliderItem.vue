<script setup>
import ArticleContent from './ArticleContent.vue'
import ArticleInfo from './ArticleInfo.vue'
import ArticleProfile from './ArticleProfile.vue'

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
  <div class="slider-item-container">
    <div class="slider-item">
      <div class="slider-item-writer">
        <ArticleProfile
          :author-name="props.userName"
          :author-image="props.userImage"
          :article-date="props.articleDate"
          component-style="light"
        ></ArticleProfile>
      </div>
      <div class="slider-item-content">
        <ArticleContent
          :article-text="props.articleText"
          :article-title="props.articleTitle"
          component-style="light"
        ></ArticleContent>
      </div>
      <div class="slider-item-info">
        <ArticleInfo
          :article-category="props.articleCategory"
          :article-read-time="props.articleReadTime"
          component-style="light"
        ></ArticleInfo>
      </div>
    </div>
  </div>
</template>

<style>
.slider-item-container {
  display: flex;
  justify-content: center;
}
.slider-item {
  max-width: 80%;
  background-color: rgba(85, 85, 85, 0.8);
  border-radius: 10px;
  color: white;
  padding: 2rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: start;
}
.slider-item-writer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
.slider-item-writer-image {
  height: 48px;
  width: 48px;
}
.slider-item-writer-image img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.slider-item-writer-content {
  display: flex;
  flex-direction: column;
}
.slider-item-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
.dot-spacer {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: white;
}

.article-category {
  background-color: var(--category-background-color);
  color: var(--category-foreground-color);
  border-radius: 0.3rem;
  padding: 3px 12px;
}
</style>
