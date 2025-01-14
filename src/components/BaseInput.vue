<script setup>
const props = defineProps({
  name: { type: String, default: '' },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  modelValue: { type: String, default: '' },
  error: { type: [String, Boolean], default: false },
})
</script>

<template>
  <div class="input-container">
    <label :for="props.name">{{ label }}</label>
    <input
      :name="props.name"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      pattern=""
    />
    <div class="input-error" v-if="error">{{ error }}</div>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 16px;
  width: 100%;
}
.input-container input {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 2px solid #405f7c;
  outline: none;
  height: 42px;
  font-size: 1.1rem;
  line-height: 42px;
  width: 100%;
  border-radius: 4px;
}
.input-container input:hover {
  border-bottom: 2px solid rgb(31, 139, 238);
}
.input-container input:focus {
  border-bottom: 2px solid rgb(31, 139, 238);
  background-color: rgba(0, 0, 0, 0.2);
}
.input-error {
  color: red;
  font-size: 0.8rem;
  font-weight: 300;
}
</style>
