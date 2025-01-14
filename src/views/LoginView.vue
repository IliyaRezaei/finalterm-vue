<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { onMounted, ref } from 'vue'

const { users, user, authLogin } = useAuthStore()

const router = useRouter()

function login() {
  validatePassword()
  if (isPasswordValid.value.valid) {
    authLogin()
    router.push({ path: '/' })
  } else {
    user.password = ''
  }
}

const isPasswordValid = ref({})
function validatePassword() {
  if (
    user.password.length > 7 &&
    users.find((x) => x.phoneNumber === user.phoneNumber && x.password === user.password)
  ) {
    isPasswordValid.value = { valid: true, errorMessage: '' }
  } else {
    isPasswordValid.value = { valid: false, errorMessage: 'رمز وارد شده معتبر نمی باشد' }
  }
}

onMounted(() => {
  if (!user.phoneNumber && !users.includes((x) => x.phoneNumber === user.phoneNumber)) {
    router.push('/auth')
  }
})
</script>

<template>
  <div class="card" @keydown.enter="login">
    <h2>ورود</h2>
    <BaseInput
      v-model="user.password"
      label="رمز عبور"
      placeholder="رمز عبور خود را وارد کنید"
      name="password"
      :error="isPasswordValid.errorMessage"
    ></BaseInput>
    <BaseButton @click="login">ورود</BaseButton>
  </div>
</template>

<style scoped></style>
