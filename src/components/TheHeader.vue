<script setup>
import { useAuthStore } from '@/stores/auth'
import { computed } from 'vue'
const { user, users } = useAuthStore()
const isAuthenticated = computed(() => {
  return users.find((x) => x.id === user.id) ? true : false
})
</script>

<template>
  <div class="header-container">
    <router-link to="/"><base-logo></base-logo></router-link>
    <div class="header-context">
      <SearchButton v-if="$route.name === 'home'"></SearchButton>
      <div v-if="isAuthenticated">خوش اومدی {{ user.fullname }}</div>
      <router-link v-else to="/auth"
        ><BaseButton type="outlined">ورود/ ثبت نام</BaseButton></router-link
      >
    </div>
  </div>
</template>

<style scoped>
.header-container {
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  position: sticky;
  top: 0;
}
.header-context {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}
</style>
