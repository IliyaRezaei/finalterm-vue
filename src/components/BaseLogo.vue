<script setup>
import { computed } from 'vue'
const props = defineProps({
  firstSquareColor: {
    type: String,
    default: 'var(--primary-gray-color)',
  },
  secondSquareColor: {
    type: String,
    default: 'var(--primary-blue-color)',
  },
  logoColor: {
    type: String,
    default: 'var(--primary-blue-color)',
  },
})

const firstSquare = computed(() => {
  return { borderColor: `${props.firstSquareColor}` }
})
const secondSquare = computed(() => {
  return { borderColor: `${props.secondSquareColor}` }
})
const logo = computed(() => {
  return { color: `${props.logoColor}` }
})
const plus = computed(() => {
  return { backgroundColor: `${props.logoColor}` }
})
</script>

<template>
  <div class="header-logo">
    <div class="logo-rightside">
      <div class="logo-square-one" :style="firstSquare"></div>
      <div class="logo-square-two" :style="secondSquare"></div>
    </div>
    <div class="logo-leftside">
      <div class="logo-name" :style="logo">هلیوم</div>
      <div class="logo-plus-vertical" :style="plus"></div>
      <div class="logo-plus-horizontal" :style="plus"></div>
    </div>
  </div>
</template>

<style scoped>
.header-logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: 40px;
}
.logo-leftside {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo-name {
  font-size: 18px;
  font-weight: 700;
}
.logo-plus-vertical {
  position: relative;
  width: 3px;
  height: 9px;
  right: 6px;
  bottom: 6px;
}
.logo-plus-horizontal {
  position: relative;
  width: 9px;
  height: 3px;
  bottom: 6px;
}
.logo-rightside {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo-square-one {
  position: relative;
  right: 7px;
  padding: 0.75rem;
  transform: rotate(45deg);
  border: 5px solid;
  border-radius: 4px;
}
.logo-square-two {
  padding: 0.75rem;
  transform: rotate(45deg);
  border: 5px solid;
  border-radius: 4px;
}
img {
  height: 100%;
  width: 100%;
}
</style>
