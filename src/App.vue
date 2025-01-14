<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div id="app-container">
    <header id="header">
      <the-header></the-header>
    </header>
    <main id="main">
      <router-view></router-view>
    </main>
    <footer id="footer">
      <the-footer></the-footer>
    </footer>
  </div>
</template>

<style scoped>
#app-container {
  display: flex;
  flex-direction: column;

  min-height: 100vh;
}

#header {
  width: 100%;
}

#main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1 1;
}

#footer {
  width: 100%;
  bottom: 0;
}
</style>
