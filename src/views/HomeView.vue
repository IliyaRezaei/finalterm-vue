<script setup>
import HomeSlider from '@/components/HomeSlider.vue'
import VerticalArticle from '@/components/VerticalArticle.vue'
import HorizontalArticle from '@/components/HorizontalArticle.vue'

import { useArticleStore } from '@/stores/article'
import { computed } from 'vue'
const { articles } = useArticleStore()

const topArticles = computed(() => {
  return articles.filter((x) => x.isTopArticle === true)
})

const otherArticles = computed(() => {
  return articles.filter((x) => x.isTopArticle === false)
})
</script>

<template>
  <home-slider class="home-slider"> </home-slider>

  <div class="articles">
    <div class="vertical-articles">
      <vertical-article
        v-for="article in topArticles"
        :key="article.id"
        :article-title="article.articleTitle"
        :article-text="article.articleText"
        :article-category="article.articleCategory"
        :article-date="article.articleDate"
        :article-read-time="article.articleReadTime"
        :article-image-url="article.articleImage"
        :user-image="article.articleAuthorImage"
        :user-name="article.articleAuthorName"
      ></vertical-article>
    </div>

    <div class="horizontal-articles">
      <horizontal-article
        v-for="article in otherArticles"
        :key="article.id"
        :article-title="article.articleTitle"
        :article-text="article.articleText"
        :article-category="article.articleCategory"
        :article-date="article.articleDate"
        :article-read-time="article.articleReadTime"
        :article-image-url="article.articleImage"
        :user-image="article.articleAuthorImage"
        :user-name="article.articleAuthorName"
      >
      </horizontal-article>
    </div>
  </div>
</template>

<style scoped>
.home-slider {
  width: 100%;
  height: 75vh;
}

.articles {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vertical-articles {
  max-width: 75%;
  display: flex;
  align-items: start;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2.5rem auto;
}

.horizontal-articles {
  min-width: 75%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  margin-bottom: 2.5rem;
}
</style>
