<script setup>
import HomeSliderItem from './HomeSliderItem.vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
const modules = [Navigation, Pagination]

import { useArticleStore } from '@/stores/article'
import { computed } from 'vue'
const { articles } = useArticleStore()

const slideArticles = computed(() => {
  return articles.filter((x) => x.isSlideArticle === true).reverse()
})
function backgroundImage(articleImageUrl) {
  const image = 'background-image: url(' + articleImageUrl + ');'
  return image
}
</script>

<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :loop="true"
    :navigation="true"
    :modules="modules"
    :initial-slide="slideArticles.length - 1"
    class="swiper-container"
  >
    <swiper-slide
      class="swiper-slide"
      v-for="article in slideArticles"
      :key="article.id"
      :style="backgroundImage(article.articleImage)"
      ><HomeSliderItem
        :article-category="article.articleCategory"
        :article-date="article.articleDate"
        :article-image-url="article.articleImage"
        :article-title="article.articleTitle"
        :article-text="article.articleText"
        :article-read-time="article.articleReadTime"
        :user-image="article.articleAuthorImage"
        :user-name="article.articleAuthorName"
      ></HomeSliderItem
    ></swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper-slide {
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: end;
  padding-bottom: 5%;
}
.swiper-slide {
}
</style>
