<script setup>
import { computed } from 'vue'

const props = defineProps({
  fontSize: {
    type: String,
    default: '16px',
  },
  type: {
    type: String,
    default: 'filled',
  },
})

const style = computed(() => {
  if (props.type === 'outlined') {
    return {
      backgroundColor: 'var(--primary-white-color)',
      color: 'var(--primary-blue-color)',
      border: '1px solid var(--primary-outline-color)',
      borderRadius: '5px',
      fontSize: props.fontSize,
    }
  } else {
    return {
      backgroundColor: 'var(--primary-blue-color)',
      color: 'var(--primary-white-color)',
      fontSize: props.fontSize,
    }
  }
})
</script>

<template>
  <button class="button" :style="style"><slot></slot></button>
</template>

<style scoped>
.button {
  width: 167px;
  height: 46px;
  color: rgb(232, 255, 255);
  border: none;
  border-radius: 0.2rem;
}
.button:hover {
  cursor: pointer;
}
</style>
