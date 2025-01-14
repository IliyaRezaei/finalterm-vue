<script setup>
import { ref } from 'vue'
import BaseInput from './BaseInput.vue'
import { useArticleStore } from '@/stores/article'

const { articles } = useArticleStore()

const isSearchOpen = ref(false)
const searchValue = ref('')

function reset() {
  isSearchOpen.value = !isSearchOpen.value
  results.value = null
  searchValue.value = ''
}

const results = ref({})
function getResult() {
  results.value = articles.filter((x) => x.articleTitle.startsWith(searchValue.value))
}
</script>

<template>
  <div v-if="isSearchOpen" @focusout="reset" @keyup.enter="getResult">
    <BaseInput v-model="searchValue" placeholder="جستجو کنید..."></BaseInput>
    <div class="results">
      <div class="result" v-for="article in results" :key="article.id">
        {{ article.articleTitle }}
      </div>
    </div>
  </div>
  <div class="search-button-container" @click="reset" v-else>
    <div class="search-button-lens"></div>
    <div class="search-button-stick"></div>
  </div>
</template>

<style scoped>
.search-button-container {
  cursor: pointer;
}
.search-button-lens {
  width: 24px;
  height: 24px;
  border: 2px solid gray;
  border-radius: 50%;
}
.search-button-stick {
  position: relative;
  transform: rotate(45deg);
  height: 2px;
  width: 5px;
  bottom: 2px;
  left: 3px;
  border-radius: 2px;
  background-color: gray;
}

.results {
  position: absolute;
  z-index: 999;
  top: 150px;
  left: 30%;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.7);
}
</style>
