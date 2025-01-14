<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
const router = useRouter()
const { user, users } = useAuthStore()
function continueAuth() {
  validatePhoneNumber()
  if (isPhoneNumberValid.value.valid) {
    if (users.find((x) => x.phoneNumber === user.phoneNumber)) {
      console.log(user.phoneNumber)
      router.push({ name: 'login' })
    } else {
      console.log(user.phoneNumber)
      router.push({ name: 'register' })
    }
  } else {
    error.value.phoneNumber = 'شماره تلفن همراه وارد شده معتبر نمی باشد'
  }
}

const phoneRegex = /09([0-9]){9}/
const isPhoneNumberValid = ref({})
function validatePhoneNumber() {
  if (user.phoneNumber.length === 11 && phoneRegex.test(user.phoneNumber)) {
    isPhoneNumberValid.value = { valid: true, errorMessage: '' }
  } else {
    isPhoneNumberValid.value = { valid: false, errorMessage: 'شماره تلفن همراه شما معتبر نمی باشد' }
  }
}
const error = ref({})
</script>

<template>
  <div class="card" @keydown.enter="continueAuth">
    <h2>ورود / ثبت نام</h2>
    <BaseInput
      v-model="user.phoneNumber"
      label="لطفا شماره تلفن همراه خود را وارد کنید"
      name="phoneNumber"
      placeholder="مثال                                                ۰۹۱۹۰۹۹۰۹۰۹"
      :error="isPhoneNumberValid.errorMessage"
      @keyup.enter="continueAuth"
    ></BaseInput>
    <BaseButton @click="continueAuth">ادامه</BaseButton>
  </div>
</template>

<style scoped></style>
